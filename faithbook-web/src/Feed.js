import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCategory } from './actions';
import './Feed.css'
import Post from './Post';
import { NavLink } from 'react-router-dom';
import './Links.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  fetchFeedFromServer = (category, language, translation) => {
    axios.get(`http://backend-env.mmkwrgit9f.eu-west-2.elasticbeanstalk.com/feed?category=${category}&language=${language}&translation=${translation}`)
      .then(response => {
        this.setState({posts: response.data.posts});
    });
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
      return <Post text={post.post_text} source={post.post_source} image={post.image_url} author={post.author_name} profile={post.author_image_url} link={post.author_hotlink}/>
    });

    return (
      <div className="Feed">
        {posts}
        <a className="StdLinkText-Bottom">
          <NavLink to= "/terms" className="StdLinkText"> Terms </NavLink> &ensp;
          <NavLink to= "/privacy" className="StdLinkText"> Privacy </NavLink> &ensp;
          <NavLink to= "/faq" className="StdLinkText"> FAQ </NavLink> &ensp;
          <NavLink to= "/manageconsent" className="StdLinkText"> Manage Consent </NavLink> &ensp;
          <s className='StdLinkText'>FAITHBOOK &#169; 2019</s>
        </a>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  language: state.content.language,
  translation: state.content.translation,
  category: state.content.category,
});

const mapDispatchToProps = dispatch => ({
  setCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
