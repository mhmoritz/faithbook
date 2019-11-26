import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Feed.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Error } from '@material-ui/icons';
import Post from './Post';

const Feed = ({
  feed, titles, isFeedPending, hasRequestFailed,
}) => {
  const spinner = <CircularProgress className="Spinner" color="inherit" size={60} thickness={2} />;
  const error = (
    <div className="ErrorBox">
      <Error className="ErrorSymbol" style={{ width: 25, height: 25 }} />
      <div className="ErrorMessage">
        There was a problem with your request.
        <br />
        Please make sure your device has access to the internet.
      </div>
    </div>
  );

  let content;
  if (isFeedPending) {
    content = spinner;
  } else if (hasRequestFailed) {
    content = error;
  } else {
    content = feed.posts.map(post => (
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
  }
  return (
    <div className="Feed">
      {content}
    </div>
  );
};

const mapStateToProps = state => ({
  feed: state.content.feed,
  titles: state.content.titles,
  isFeedPending: state.controls.isFeedPending,
  hasRequestFailed: state.controls.hasRequestFailed,
});

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
  titles: PropTypes.object.isRequired,
  isFeedPending: PropTypes.bool.isRequired,
  hasRequestFailed: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Feed);
