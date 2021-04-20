import React, { Component } from "react";
import Style from "./stylenav.css";
import {Link} from "react-router-dom";
import logo from "../../Assets/logo.png"

const NavbarComp=()=>{
    return(
    <nav>
        <ul class="navigation">
            <li class="navItem" >Jueguitos Sabana <img src={logo} alt="Jueguitos Sabana" width="45" height="45"/></li>
            <li class="navItem" > <Link to="/" >RESEÑAS</Link></li>
            <li class="navItem"> <Link to="/inventory">INVENTARIO</Link> </li>
            <li class="navItem"> <Link to="/community">AMIGOS</Link></li>
            <li class="navItem"> <Link to="/profile">PERFIL</Link></li>
        </ul>
    </nav>
    );
}
export default NavbarComp;