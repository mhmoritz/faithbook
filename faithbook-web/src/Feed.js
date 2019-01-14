import React, { Component } from 'react';
import './Feed.css'
import Post from './Post';

class Feed extends Component {
  renderNPosts = (N) => {
    let arr = [];

    for(var i=0; i<N; i++) {
      arr.push(<Post/>)
    }
    return arr;
  }

  render() {
    return (
      <div className="Feed">
        {this.renderNPosts(10)}
      </div>
    );
  }
}

export default Feed;
