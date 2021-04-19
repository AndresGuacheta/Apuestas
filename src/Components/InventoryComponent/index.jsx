import React, { Component } from "react";
import "./style.css";


class InventoryComponent extends Component {
    state = {
        loading: true,
        people: []
      };
      
    
      async componentDidMount() {
        const url = "https://api.npoint.io/001ae1310af169829539";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data, loading: false });
      }
      
    
      render() {
        return (
          <section className='hero-section'>
              <div class="card-grid">
                {this.state.people.map(person => (
                <a className ='card' key = {person.id} href="#">
                  <div className = 'card__background'> <img class='imagen' src= {person.url}/></div>
                  <div class="card__content">
                  <p class="card__category">Categoria</p>
                    <h3 class="card__heading">{person.categoria}</h3>
                    <p class="card__category">Lanzamiento</p>
                    <h3 class="card__heading">{person.lanzamiento}</h3>
                    <p class="card__category">Precio</p>
                    <h3 class="card__heading">{person.precio}</h3>
                    
                  </div>                 
                </a>
              
            ))}
          </div>
          </section>
        );
      }
}
export default InventoryComponent;
