import React, { Component } from 'react';
import styled from 'styled-components';


class rannsokn extends Component{
  render(){
    return (
      <div class="App"> 
                <Container>
                    <h1> Rannsóknir drasl </h1>
                </Container>
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
