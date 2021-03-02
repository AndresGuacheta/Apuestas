import React from "react";
import Home from "../../Container/Home";
import {Route, BrowserRouter as Router} from 'react-router-dom';


const Routing = ()=> {
return (
    <Router>
        
            <Route exact path="/" component= {Home}/>
        
    </Router>
);
}
export default Routing;