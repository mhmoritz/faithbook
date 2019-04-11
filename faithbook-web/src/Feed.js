import React, { Component } from 'react';
import axios from 'axios';
import './Feed.css'
import Post from './Post';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  fetchFeedFromServer = (category, language) => {
    axios.get(`http://127.0.0.1:5000/feed?category=${category}&language=${language}`)
      .then(response => {
        this.setState({posts: response.data});
    });
  }

  componentWillMount = () => {
    let { category } = this.props.match.params;
    this.fetchFeedFromServer(category, "ENG")
  }

  componentWillReceiveProps(nextProps) {
    let { category } = nextProps.match.params;
    this.fetchFeedFromServer(category, "ENG")
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
