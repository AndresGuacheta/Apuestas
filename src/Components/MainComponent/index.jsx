import React, { Component } from "react";
import "./style.css";



class MainComponent extends Component {
state = {
  loading: true,
  people: []
  };
      
async componentDidMount() {
  const url = "https://api.npoint.io/9b8d805eada79e35b550";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ people: data, loading: false });
}
render() {
  return (
    
    <div class="row">
    {this.state.people.map(person => (
      
      <div class="column">
        <div class="item">
        <div class="plx-card bronze">
        <div class="pxc-bg" > <img class="imagen" src={person.url}/> </div>
        <div class="pxc-avatar"><img src={person.urluser}/></div>
  <div class="pxc-stopper">   </div>
  <div class="pxc-subcard">
    <div class="pxc-title">{person.name}</div>
    <div class="pxc-sub"> {person.nickname} dice: {person.Reseña}  </div>
    <div class="pxc-feats"><span>{person.categoria}</span>
    </div>
  </div>
</div>
        </div>                      
      </div>
    ))}
    </div>

  );
}
}
export default MainComponent;

