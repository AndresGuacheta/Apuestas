import React, { Component } from "react";
import { Navbar,Nav,Icon,Dropdown } from 'rsuite';
import Style from "./style.css";
import {Link} from "react-router-dom";

const NavbarComp=()=>{
    return(
    <nav>
        <ul class="navigation">
            <li class="navItem"> <Link to="/">Inicio</Link></li>
            <li class="navItem"> <Link to="/inventory">Inventario</Link> </li>
            <li class="navItem"> Cajitas</li>
            <li class="navItem"> Perfil</li>
        </ul>
    </nav>
    );
}
export default NavbarComp;