import React, { Component } from "react";
import "./style.css";
import {Link} from "react-router-dom";


class Error extends Component {

render() {
  return (
      <div>
      
  
  <div class="mainbox">
    <div class="err">  4 0 4</div> 
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/" >Home</Link> and try from there.</p></div>
      </div>
      </div>

  

  );
}
}
export default Error;

