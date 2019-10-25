import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feed.css'
import Post from './Post';
import CircularProgress from '@material-ui/core/CircularProgress';

class Feed extends Component {
  render() {
    const spinner = <CircularProgress className="Spinner" color="inherit" size={100} thickness={2} />;
    const posts = this.props.isFeedPending ? spinner : this.props.feed.posts.map(post => {
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
  translation: state.content.translation,
  feed: state.content.feed,
  titles: state.content.titles,
  isFeedPending: state.controls.isFeedPending,
});

export default connect(mapStateToProps)(Feed);
