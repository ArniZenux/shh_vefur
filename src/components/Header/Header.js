import React from 'react';
import picture from '../../assets/icon/little_icon.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => (
    <HeaderContainer>
        <HeaderBox>
                <Link to="/"> <img src={ picture } alt={picture} /> </Link>
                <Link to="/rannsokn"> <HeaderFont>Rannsóknir</HeaderFont> </Link>
                <Link to="/umShh"> <HeaderFont>Um Shh</HeaderFont> </Link>
        </HeaderBox>
    </HeaderContainer>

    
)
export default Header;

export const HeaderContainer = styled.div`
    padding: 15px; 
    background: #ff0000;
    height: 50%;
    width: 100%;
` 
export const HeaderBox = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    margin: auto ; 
    width: 50%; 
`
export const HeaderFont = styled.h3`
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 19px;
    &.visited{
        text-decoration: none;  
    }
    &:hover { 
        text-decoration: none;
    }
` 