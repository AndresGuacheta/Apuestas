import React, { Component } from "react";
import "./style.css";


class InventoryComponent extends Component {
    state = {
        loading: true,
        games: []
      };
      
    
      async componentDidMount() {
        const url = "https://api.npoint.io/001ae1310af169829539";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ games: data, loading: false });
      }
      
    
      render() {
        return (
          <div>
            <h2>Tu Inventario</h2>
          <section className='hero-section'>
              <div class="card-grid">
                {this.state.games.map(game => (
                <a className ='card' key = {game.id} href="#">
                  <div className = 'card__background'> <img class='imagen' src= {game.url}/></div>
                  <div class="card__content">
                  <p class="card__category">Categoria</p>
                    <h3 class="card__heading">{game.categoria}</h3>
                    <p class="card__category">Lanzamiento</p>
                    <h3 class="card__heading">{game.lanzamiento}</h3>
                    <p class="card__category">Precio</p>
                    <h3 class="card__heading">{game.precio}</h3>
                    
                  </div>                 
                </a>
              
            ))}
          </div>
          </section>
          </div>
        );
      }
}
export default InventoryComponent;
