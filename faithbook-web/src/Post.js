import React, { Component } from 'react';
import './Post.css'
import {Collection, CollectionItem, Icon} from 'react-materialize'

class Post extends Component {
  render() {
    return (
      <Collection className="Post">
        <div className="Card">
          <img className="Image"
            src={"https://source.unsplash.com/1900x1080/?paint"}/>
          <div className="Overlay">
            <div className="Overlay-Text">Overlay Text</div>
            <div className="Overlay-Source">Source</div>
          </div>
        </div>
        <CollectionItem>
          <Icon className="Panel black-text right">bookmark_border</Icon>
          <Icon className="Panel black-text right">favorite_border</Icon>
        </CollectionItem>
      </Collection>
    );
  }
}

export default Post;
