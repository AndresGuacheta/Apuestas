import React, { Component } from "react";
import Style from "./style.css";
import {Link} from "react-router-dom";
import logo from "../../Assets/logo.png"

const NavbarComp=()=>{
    return(
    <nav>
        <ul class="navigation">
            <li class="navItem" > <img src={logo} alt="Jueguitos Sabana" width="35" height="35"/></li>
            <li class="navItem" > <Link to="/" >RESEÑAS</Link></li>
            <li class="navItem"> <Link to="/inventory">INVENTARIO</Link> </li>
            <li class="navItem"> <Link to="/community">AMIGOS</Link></li>
            <li class="navItem"> <Link to="/error">PERFIL</Link></li>
        </ul>
    </nav>
    );
}
export default NavbarComp;