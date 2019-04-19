import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import './Post.css'
import {Collection, CollectionItem, Icon} from 'react-materialize'

class Post extends Component {
  render() {
    return (
        <Collection className="Post">
          <LazyLoad offset={150}>
            <div>
              <div className="Card">
                <img className="Image"
                  src={this.props.image}/>
                <div className="Overlay">
                  <div className="Overlay-Text">{this.props.text}</div>
                  <div className="Overlay-Source">{this.props.source}</div>
                </div>
              </div>
              <CollectionItem>
                <Icon className="Panel black-text right">bookmark_border</Icon>
                <Icon className="Panel black-text right">favorite_border</Icon>
              </CollectionItem>
            </div>
          </LazyLoad>
        </Collection>
    );
  }
}

export default Post;
