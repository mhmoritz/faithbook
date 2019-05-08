import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTranslation } from './actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  text: {
    color: '#000000',
    marginLeft: 10,
  },
};

class TranslationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translations: [],
    };
  }

  fetchTranslationsFromServer(language) {
    axios.get(`http://127.0.0.1:5000/translations?language=${language}`)
      .then(response => {
        this.setState({...this.state, translations: response.data});
        this.props.setTranslation(response.data[0])
    });
  }

  componentWillMount() {
    this.fetchTranslationsFromServer(this.props.language)
  }

  componentWillReceiveProps(nextProps) {
    let { language } = nextProps;
    this.fetchTranslationsFromServer(language)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.text}>
        {this.props.translation.abbreviation}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.content.language,
  translation: state.content.translation,
});

const mapDispatchToProps = dispatch => ({
  setTranslation: (translation) => dispatch(setTranslation(translation))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TranslationSelector));
