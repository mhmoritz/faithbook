import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Feed.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Post from './Post';

const Feed = ({
  feed, titles, isFeedPending,
}) => {
  const spinner = <CircularProgress className="Spinner" color="inherit" size={60} thickness={2} />;
  const posts = isFeedPending ? spinner : feed.posts.map(post => (
    <Post
      text={post.post_text}
      source={post.post_source}
      image={post.image_url}
      author={post.author_name}
      profile={post.author_image_url}
      link={post.author_hotlink}
      altText={post.alt_text}
      category={titles[post.category]}
      key={post.post_source}
    />
  ));
  return (
    <div className="Feed">
      {posts}
    </div>
  );
};

const mapStateToProps = state => ({
  feed: state.content.feed,
  titles: state.content.titles,
  isFeedPending: state.controls.isFeedPending,
});

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
  titles: PropTypes.object.isRequired,
  isFeedPending: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Feed);
