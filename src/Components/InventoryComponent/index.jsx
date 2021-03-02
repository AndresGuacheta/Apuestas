import React, { Component } from "react";
import "./style.css";
import imagen1 from "../../Assets/stardew_valley.png"
import imagen2 from "../../Assets/Dying-Light-logo.jpg"
import imagen3 from "../../Assets/fb_image.png"


class InventoryComponent extends Component {

    render(){

        return(
            <>
            <div class="box-container">
               
            
            <div class="grid">
                <h1>
               Inventario
                </h1>
                <img class="imagen" src={imagen1} alt=""/>
                <img class="imagen" src={imagen2} alt=""/>
                <img class="imagen" src={imagen3} alt=""/>
            </div>
            </div>
            </>
        )
    }
}
export default InventoryComponent;