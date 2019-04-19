import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import './Post.css'
import {Collection, CollectionItem, Icon} from 'react-materialize'

class Post extends Component {
  render() {
    return (
      <Collection className="Post">
        <LazyLoad height={500} offset={1000}>
          <div>
            <div className="Card">
              <img className="Image"
                src={this.props.image}
                alt=""
              />
              <div className="Overlay">
                <div className="Overlay-Text">{this.props.text}</div>
                <div className="Overlay-Source">{this.props.source}</div>
              </div>
            </div>
            <CollectionItem>
              <img className="Profile-img"
                src={this.props.profile}
                alt=""
              />
              <span className="Panel-text">
                Photo by &nbsp;
                <a
                  className="Profile-name"
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.author}
                </a>
              </span>
            </CollectionItem>
          </div>
        </LazyLoad>
      </Collection>
    );
  }
}

export default Post;
