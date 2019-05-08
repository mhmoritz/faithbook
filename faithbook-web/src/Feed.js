import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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
        this.setState({posts: response.data.posts});
    });
  }

  componentWillMount = () => {
    let { category } = this.props.match.params;
    this.fetchFeedFromServer(category, this.props.language)
  }

  componentWillReceiveProps(nextProps) {
    let { category } = nextProps.match.params;
    this.fetchFeedFromServer(category, nextProps.language)
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post text={post.post_text} source={post.post_source} image={post.image_url} author={post.author_name} profile={post.author_image_url} link={post.author_hotlink}/>
    });

    return (
      <div className="Feed">
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.content.language,
});

export default connect(mapStateToProps)(Feed);
