import React, { Component } from 'react';
import LanguageSelector from './LanguageSelector';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
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
