import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCategory } from './actions';
import './Feed.css'
import Post from './Post';
import { fetchFeedFromServer } from ConnectionHandler

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    let { category } = this.props.match.params;
    this.fetchFeedFromServer(category, this.props.language, this.props.translation.abbreviation)
  }

  componentWillReceiveProps(nextProps) {
    let { category } = nextProps.match.params;
    const wasCategoryChanged = category !== this.props.category;
    const wasTranslationChanged = nextProps.translation.abbreviation !== this.props.translation.abbreviation;
    if (wasCategoryChanged || wasTranslationChanged) {
      this.fetchFeedFromServer(category, nextProps.language, nextProps.translation.abbreviation)
    }
    this.props.setCategory(category);
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          text={post.post_text}
          source={post.post_source}
          image={post.image_url}
          author={post.author_name}
          profile={post.author_image_url}
          link={post.author_hotlink}
          altText={post.alt_text}
          category={this.props.titles[post.category]}
        />
      )
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
  translation: state.content.translation,
  category: state.content.category,
  titles: state.content.titles,
});

const mapDispatchToProps = dispatch => ({
  setCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
