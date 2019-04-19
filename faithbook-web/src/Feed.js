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
