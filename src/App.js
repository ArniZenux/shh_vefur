import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './Layout';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component{
  render(){
    return (
      <div class="App"> 
        <Router>
            <Header/>
            <Layout/>
        </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;


//<h2>Samskiptamiðstöð</h2>
//<img src={logo} class="App-logo"/> 
          