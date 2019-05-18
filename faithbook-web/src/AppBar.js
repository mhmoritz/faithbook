import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideBar } from './actions';
import LanguageMenu from './LanguageMenu';
import TranslationMenu from './TranslationMenu';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImportContacts from '@material-ui/icons/ImportContacts';

const styles = {
  mainBar:{
    backgroundColor: '#ffffff'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    color: '#000000',
  },
  inputFocused: {
    background: "$labelcolor",
    marginRight: 100,
  }
};

class NavigationBar extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar className={classes.mainBar}>
          <Toolbar>
            <IconButton
              color="default"
              aria-label="Menu"
              className={classes.menuButton, classes.button}
              onClick={this.props.openSideBar}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow} />
            <LanguageMenu />
            <TranslationMenu />
          </Toolbar>
        </AppBar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSideBar: () => dispatch(openSideBar()),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavigationBar));
