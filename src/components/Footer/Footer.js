import React , { Component } from 'react';
import styled from 'styled-components';
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

class Footer extends Component{
  render(){
    return (
      <FooterContainer>
      <Grid>
        <Item>
          <h3>Táknmálsmiðstöð Reykjavíkur</h3>
          <address>Grensásvegi 9, 3. hæð, 108 Reykjavík</address>
          <p>
            Sími: 562 7702 / 562 7738<br/>
            GSM:  886 7701 SMS <br/>
            Email: shh@shh.is <br/>
          </p>

          <p>
            Skrifstofan er opin kl. 8-16 alla virka daga
          </p>

          <p>Túlkaþjónusta í neyðartilvikum utan skrifstofutíma - hringið í 112</p>
        </Item>
        <Item>
          <h3>Hafðu samband</h3>
          <form>
            <label for="fname">Nafn</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="fname">Netfang</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="fname">Fyrirspurn</label><br/>
            <textarea rows="4" cols="50" name="comment" form="usrform"/><br/>
            <input type="submit" value="Senda"></input>
          </form>
        </Item>
      </Grid>
    </FooterContainer>
    );
  }
}
  
export default Footer;

export const FooterContainer = styled.div`
    padding: 15px; 
    background: #ff0000;
    height: 300px;
    width: 100%;      
` 

export const Grid = styled.div`
   margin: auto 300px; 
   display: grid;
   grid-template-columns: repeat(2,1fr);
   grid-gap: 5px; 
`

export const Item = styled.div`
  padding: 4px; 
  text-align: left; 
`

