import React from "react";
import Home from "../../Container/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavbarComp  from "../Navbar/navbar";
import Inventory from "../../Container/inventory";
import Error from "../../Container/Error";
const Routing = ()=> {
return (
    <Router>
           <NavbarComp />
           <Switch>
           <Route exact path="/" component= {Home}/>
           <Route exact path="/Inventory" component= {Inventory}/>
           <Route exact path="/Error" component= {Error}/>
           </Switch>
    </Router>

);
}
export default Routing;