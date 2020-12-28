import React from 'react';
import picture from '../../assets/icon/little_icon.png';
import styled from 'styled-components';
import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom';
import { Rannsokn } from '../../pages/rannsokn/rannsokn';

const Header = () => (
    <HeaderContainer>
        <HeaderBox>
            <img src={ picture }/>
            <Router>
                
                <Link to="/rannsokn"> <HeaderFont>Rannsóknir</HeaderFont> </Link>
                <HeaderFont>Íslenskt Táknmál</HeaderFont>
                <HeaderFont>Túlkaþjónusta</HeaderFont>
                <HeaderFont>Ráðgjöf og fræðsla</HeaderFont>
                <HeaderFont>Samstarf</HeaderFont>
                <HeaderFont>Um SHH</HeaderFont>
                
                <Switch>
                    <Route path="/rannsokn" component={Rannsokn}>
                        <Rannsokn />
                    </Route>
                </Switch>

            </Router>
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
    font-weight: 500;
    font-size: 19px;
` 

