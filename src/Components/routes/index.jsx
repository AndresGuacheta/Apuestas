import React from "react";
import Home from "../../Container/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavbarComp  from "../Navbar/navbar";
import Inventory from "../../Container/inventory";

const Routing = ()=> {
return (
    <Router>
           <NavbarComp />
           <Switch>
           <Route exact path="/" component= {Home}/>
           <Route exact path="/Inventory" component= {Inventory}/>
           </Switch>
    </Router>

);
}
export default Routing;