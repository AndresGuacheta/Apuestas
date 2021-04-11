import React, { Component } from "react";
import Style from "./style.css";
import {Link} from "react-router-dom";

const NavbarComp=()=>{
    return(
    <nav>
        <ul class="navigation">
            <li class="navItem"> <Link to="/">Inicio</Link></li>
            <li class="navItem"> <Link to="/inventory">Inventario</Link> </li>
            <li class="navItem"> <Link to="/">Cajitas</Link></li>
            <li class="navItem"> <Link to="/">Perfil</Link></li>
        </ul>
    </nav>
    );
}
export default NavbarComp;