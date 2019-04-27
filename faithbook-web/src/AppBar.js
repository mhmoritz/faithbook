import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideBar } from './actions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImportContacts from '@material-ui/icons/ImportContacts';
import GTranslate from '@material-ui/icons/GTranslate';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavigationBar extends Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar className="black-text white">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.menuButton}
              onClick={this.props.openSideBar}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <GTranslate />
            </IconButton>
            <IconButton color="inherit">
              <ImportContacts />
            </IconButton>
          </Toolbar>
        </AppBar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSideBar: () => dispatch(openSideBar())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavigationBar));
