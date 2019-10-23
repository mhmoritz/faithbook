import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory, setFeed } from './actions';
import './Feed.css'
import Post from './Post';
import connectionHandler from './ConnectionHandler';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.postsAreAvailable = this.postsAreAvailable.bind(this);
  }

  postsAreAvailable(posts) {
    this.props.setFeed(posts)
  }

  componentWillMount() {
    let { category } = this.props.match.params;
    connectionHandler.fetchFeedFromServer(category, this.props.language, this.props.translation.abbreviation, this.postsAreAvailable);
  }


  componentWillReceiveProps(nextProps) {
    let { category } = nextProps.match.params;
    const wasCategoryChanged = category !== this.props.category;
    const wasTranslationChanged = nextProps.translation.abbreviation !== this.props.translation.abbreviation;
    if (wasCategoryChanged || wasTranslationChanged) {
      connectionHandler.fetchFeedFromServer(category, nextProps.language, nextProps.translation.abbreviation, this.postsAreAvailable);
    }
    this.props.setCategory(category);
  }

  render() {
    const posts = this.props.feed.map(post => {
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
  feed: state.content.feed,
});

const mapDispatchToProps = dispatch => ({
  setCategory: (category) => dispatch(setCategory(category)),
  setFeed: (posts) => dispatch(setFeed(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
