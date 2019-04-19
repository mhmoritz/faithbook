import React, { Component } from 'react';
import axios from 'axios';
import './Feed.css'
import Post from './Post';

class Feed extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/feed?category=friendship")
      .then(response => {
        this.setState({posts: response.data});
    });
  }

  render() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(w,h); 
    const posts = this.state.posts.map(post => {
      return <Post text={post.post_text} source={post.post_source} image={post.image_url}/>
    });

    return (
      <div className="Feed">
        {posts}
      </div>
    );
  }
}

export default Feed;
