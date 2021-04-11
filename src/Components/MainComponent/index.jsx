import React, { Component } from "react";
import "./style.css";
import imagen1 from "../../Assets/stardew_valley.png"
import imagen2 from "../../Assets/Dying-Light-logo.jpg"
import imagen3 from "../../Assets/fb_image.png"
import imagen4 from "../../Assets/wow1.jpg"
import imagen5 from "../../Assets/fifa21.jpg"
import imagen6 from "../../Assets/Destiny.jpg"
import imagen7 from "../../Assets/hearth.jfif"
import imagen8 from "../../Assets/Assassin.jpg"
import imagen9 from "../../Assets/Gran.jpg"
import imagen10 from "../../Assets/Crash.jpg"


class MainComponent extends Component {

    render(){

        return(            
            <div class="box-container">
               
            
                <div class="grid">
                    <h1 class="h1">
                    Juegos Disponibles
                    </h1>aaaaaaaaaaaaaaaaaaaaaaaaaaa
                    <img class="imagen" src={imagen1} alt=""/>
                    <img class="imagen" src={imagen2} alt=""/>
                    <img class="imagen" src={imagen3} alt=""/>
                    <img class="imagen" src={imagen4} alt=""/>
                    <img class="imagen" src={imagen5} alt=""/>
                    <img class="imagen" src={imagen6} alt=""/>
                    <img class="imagen" src={imagen7} alt=""/>
                    <img class="imagen" src={imagen8} alt=""/>
                    <img class="imagen" src={imagen9} alt=""/>
                    <img class="imagen" src={imagen10} alt=""/>
                </div>
            </div>
            
        )
    }
}
export default MainComponent;