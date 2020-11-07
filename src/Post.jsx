import React from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import './Post.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

const Post = ({
  text, source, link, author, image, altText, category,
}) => (
  <div className="Post">
    <Card>
      <CardActionArea>
        <LazyLoad offset={1500}>
          <CardMedia
            component="img"
            alt={altText}
            image={image}
          />
        </LazyLoad>
        <div className="Overlay">
          <div className="Overlay-Text">{text}</div>
          <div className="Overlay-Source">{source}</div>
        </div>
      </CardActionArea>
      <CardActions className="Panel">
        <div className="Panel-text Shrink">
          <div className="Left">Photo by&nbsp;</div>
          <div
            className="Post-credit Right"
            href="https://unsplash.com/?utm_source=biblefeed&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </div>
          <div className="Right">&nbsp;on&nbsp;</div>
          <div
            className="Post-credit Shrink"
            href={`${link}?utm_source=biblefeed&utm_medium=referral`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author}
          </div>
        </div>
        <div className="Filler">
          <div className="Breadcrumb">
            {category}
          </div>
      </div>
      </CardActions>
    </Card>
  </div>
);

Post.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Post;
