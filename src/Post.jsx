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
    <LazyLoad offset={1000}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={altText}
            image={image}
          />
          <div className="Overlay">
            <div className="Overlay-Text">{text}</div>
            <div className="Overlay-Source">{source}</div>
          </div>
        </CardActionArea>
        <CardActions className="Panel">
          <div>
            <span className="Panel-text">
              Photo by&nbsp;
              <a
                className="Post-credit"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author}
              </a>
              &nbsp;on&nbsp;
              <a
                className="Post-credit"
                href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'Unsplash'}
              </a>
            </span>
            <span className="Breadcrumb" style={{ backgroundColor: '#aaaaaadd' }}>
              {category}
            </span>
          </div>
        </CardActions>
      </Card>
    </LazyLoad>
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
