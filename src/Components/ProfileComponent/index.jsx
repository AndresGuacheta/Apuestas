import React, { Component } from "react";
import "./styleprof.css";
import logo from "../../Assets/goku.jpg"
import juego from "../../Assets/Dragon-ball-fighterz.jpg"
import juego2 from "../../Assets/Destiny.jpg"
import juego3 from "../../Assets/Crash.jpg"


class ProfileComponent extends Component {

      render() {
        return (
        <div class="prof">
        
            <header>
              <img src={logo}></img>
              <p class="face__name">Monkey89</p>
              <h4 class="banner">Juegos Mas Jugados:</h4>
            </header>
            <div class="prof_body">
                <ul class="social">
                  <li class="t1">
                    <h3>Dragon Ball FighterZ</h3>
                    <h4>Logros: 50 de 65</h4>
                    <img class='imagen2' src={juego}></img>
                  </li>
                  <li class="t2">
                    <h3>Destiny</h3>
                    <h4>Logros: 40 de 75</h4>
                    <img class='imagen2' src= {juego2}/>
                  </li>
                  <li class="t3">
                    <h3>Crash Bandicoot 4</h3>
                    <h4>Logros: 20 de 32</h4>
                    <img class='imagen2' src= {juego3}/>
                  </li>
                </ul>
            </div>

        
          </div>
);
      }      
}
export default ProfileComponent;
