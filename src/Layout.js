import React from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";

import Home from "./pages/Home"; 
import Rannsokn from  "./pages/rannsokn/rannsokn";
import UmShh from "./pages/umShh/umshh";

function Layout(){
    return (
       //<h1>Samskiptamiðstöð</h1>
       <Switch>
            <Route path="/rannsokn" component={Rannsokn} >
                <Rannsokn />
            </Route>
            <Route path="/umshh" component={UmShh} >
                <UmShh />
            </Route>
            <Route path="/" component={Home}>
                <Home />
            </Route>
        </Switch>
    );
}

export default Layout;