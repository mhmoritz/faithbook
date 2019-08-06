import React from 'react';
import LazyLoad from 'react-lazy-load';
import './Post.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

const Post = (props) => {
  return (
    <div className="Post">
      <LazyLoad offset={1000}>
        <Card className={Card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              className={Image}
              image={props.image}
            />
            <div className="Overlay">
              <div className="Overlay-Text">{props.text}</div>
              <div className="Overlay-Source">{props.source}</div>
            </div>
          </CardActionArea>
          <CardActions>
            <div>
            <img className="Profile-img"
              src={props.profile}
              alt=""
            />
            <span className="Panel-text">
              Photo by&nbsp;
              <a
                className="Post-credit"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                >{props.author}
              </a>&nbsp;on&nbsp;
              <a
                className="Post-credit"
                href={"https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"}
                target="_blank"
                rel="noopener noreferrer"
                >Unsplash
              </a>
            </span>
            </div>
          </CardActions>
        </Card>
      </LazyLoad>
    </div>
  );
}

export default Post;
