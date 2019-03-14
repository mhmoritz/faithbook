import React, { Component } from 'react';
import './Post.css'
import {Collection, CollectionItem, Icon} from 'react-materialize'

class Post extends Component {
  render() {
    return (
      <Collection className="Post">
        <div className="Card">
          <img className="Image"
            src={this.props.image}/>
          <div className="Overlay">
            <div className="Overlay-Text">{this.props.text}</div>
            <div className="Overlay-Source">{this.props.source}</div>
          </div>
        </div>
        <CollectionItem>
          <div className="Panel black-text left">Photo by</div>
          <a
            className="Profile-name left"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            >
            &nbsp;
            {this.props.author}
          </a>
          <img className="Profile"
            src={this.props.profile}/>
          <Icon className="Panel black-text right">bookmark_border</Icon>
          <Icon className="Panel black-text right">favorite_border</Icon>
        </CollectionItem>
      </Collection>
    );
  }
}

export default Post;
