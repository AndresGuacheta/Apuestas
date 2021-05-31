import React, { Component } from "react";
import "./stylemain.css";



class MainComponent extends Component {
  
state = {
  loading: true,
  posts: []
  };
      
async componentDidMount() {
  const url = "https://api.npoint.io/9b8d805eada79e35b550";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ posts: data, loading: false });
}
render() {
  
  return (
   <div>
     <h2>COMENTARIOS DE LA COMUNIDAD</h2>
        <div class="row">
        {this.state.posts.map(post => (
            <div class="column">
              <div class="item">
                <div class="plx-card bronze">
                  <div class="pxc-bg" > <img class="imagen" src={post.url}/> </div>
                    <div class="pxc-avatar"><img src={post.urluser}/></div>
                    <div class="pxc-stopper">   </div>
              <div class="pxc-subcard">
                    <div class="pxc-title">{post.name}</div>
                    <div class="pxc-sub"> {post.nickname} dice: {post.Reseña}  </div>
                    <div class="pxc-feats"><span>{post.categoria}</span>
                    </div>
                </div>
              </div>
            </div>                      
          </div>
        ))}
        </div>
    </div>
  );
}
}
export default MainComponent;

