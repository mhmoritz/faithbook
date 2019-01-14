import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <img className="Image"
          src={"https://source.unsplash.com/1900x1080/?nature"}/>
        <div className="Overlay">
          <div className="Overlay-Text">Overlay Text</div>
        </div>
      </div>
    );
  }
}

export default Post;
