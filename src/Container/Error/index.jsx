import React, { Component } from "react";
import "./style.css";



class Error extends Component {

render() {
  return (
      <div>
        <div class="background">
	        <div class="ground"></div>
        </div>
        <div class="left-section">
		<div class="inner-content">
			<h1 class="heading">404</h1>
			<p class="subheading">Looks like the page you were looking for is no longer here.</p>
		</div>
	</div>
        
      </div>

  );
}
}
export default Error;

