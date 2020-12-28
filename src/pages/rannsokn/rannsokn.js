import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class rannsokn extends Component{
  render(){
    return (
      <div class="App"> 
        <Header/>
                <Container>

                </Container>
        <Footer />
      </div>
    );
  }
}
export default rannsokn;

export const Container = styled.div`
    padding: 15px; 
    background: #f2f2f2;
    height: 50%;
    width: 100%;
`
