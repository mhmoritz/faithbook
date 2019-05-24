import React, { Component } from 'react';
import 'react-flags-select/css/react-flags-select.css';
import TranslationSelector from './TranslationSelector';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  text: {
    marginTop: '3px',
  },
};

class TranslationMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.text}>
        <TranslationSelector />
      </div>
    );
  }
}

export default withStyles(styles)(TranslationMenu);
