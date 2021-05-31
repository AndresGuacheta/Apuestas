import React from "react";
import Home from "../../Container/home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavbarComp  from "../navbarComponent/navbar";
import Inventory from "../../Container/inventory";
import Error from "../../Container/error";
import Profile from "../../Container/profile";
import login from "../../Container/login";
import Friends from "../../Container/friends";
const Routing = ()=> {
return (
    
    <Router>
           <NavbarComp />
           <Switch>
           <Route exact path="/" component= {Home}/>
           <Route exact path="/login" component= {login}/>
           <Route exact path="/inventory" component= {Inventory}/>
           <Route exact path="/profile" component= {Profile}/>
           <Route exact path="/friends" component= {Friends}/>
           <Route component={Error}/>
           </Switch>
    </Router>

);
}
export default Routing;