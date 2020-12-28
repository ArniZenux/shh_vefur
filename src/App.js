import React, { Component } from 'react';
import logo from './assets/image/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component{
  render(){
    return (
      <div class="App"> 
        <Header/>
        <h2>Samskiptamiðstöð</h2>
        <img src={logo} class="App-logo"/> 
        <Footer />
      </div>
    );
  }
}

export default App;
