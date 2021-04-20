import React, { Component } from "react";
import Style from "./style.css";
import {Link} from "react-router-dom";

const NavbarComp=()=>{
    return(
    <nav>
        <ul class="navigation">
            <li class="navItem" > <Link to="/" >RESEÑAS</Link></li>
            <li class="navItem"> <Link to="/inventory">INVENTARIO</Link> </li>
            <li class="navItem"> <Link to="/Community">AMIGOS</Link></li>
            <li class="navItem"> <Link to="/error">PERFIL</Link></li>
        </ul>
    </nav>
    );
}
export default NavbarComp;