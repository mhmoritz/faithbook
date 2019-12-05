import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import TranslationSelector from './TranslationSelector';
import LanguageSelector from './LanguageSelector';
import { openSideBar } from './actions';
import Logo from './logo.svg';

const styles = {
  mainBar: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
  button: {
    color: '#000000',
  },
  inputFocused: {
    background: '$labelcolor',
    marginRight: 100,
  },
  logoImage: {
    width: '85px',
    height: 'auto',
    opacity: 0.8,
  },
  toolBar: {
    width: '100%',
    maxWidth: 1024,
  },
};

const NavigationBar = ({ classes, openSideBar }) => (
  <AppBar className={classes.mainBar}>
    <Toolbar className={classes.toolBar}>
      <IconButton
        color="default"
        aria-label="Menu"
        className={`${classes.menuButton} ${classes.button}`}
        onClick={openSideBar}
      >
        <MenuIcon />
      </IconButton>
      <Link to="/feed">
        <img src={Logo} className={classes.logoImage} alt="biblefeed-logo" />
      </Link>
      <div className={classes.grow} />
      <LanguageSelector />
      <TranslationSelector />
    </Toolbar>
  </AppBar>
);

const mapDispatchToProps = dispatch => ({
  openSideBar: () => dispatch(openSideBar()),
});

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  openSideBar: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavigationBar));
