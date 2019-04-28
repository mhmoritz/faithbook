import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import './Post.css'
import {Collection, CollectionItem, Icon} from 'react-materialize'
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
              Photo by &nbsp;
              <a
                className="Profile-name"
                href={props.link}
                target="_blank"

              >
                {props.author}
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
