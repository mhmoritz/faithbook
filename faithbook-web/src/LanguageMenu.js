import React, { Component } from 'react';
import LanguageSelector from './LanguageSelector';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  text: {
    backgroundColor: '',
  },
};

class LanguageMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.text}>
        <LanguageSelector />
      </div>
    );
  }
}

export default withStyles(styles)(LanguageMenu);
