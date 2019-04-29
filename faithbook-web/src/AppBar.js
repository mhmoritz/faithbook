import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideBar } from './actions';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImportContacts from '@material-ui/icons/ImportContacts';
import GTranslate from '@material-ui/icons/GTranslate';

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
            <div>
            {/*<IconButton disableRipple={true} className={classes.button}>
              <GTranslate />
            </IconButton>*/}
            <ReactFlagsSelect
              disabled={false}
              selectedSize={18}
              optionsSize={14}
              defaultCountry="US"
              showSelectedLabel={false}
              alignOptions="left"
              countries={["US", "PT", "ES", "DE", "FR"]}
              customLabels={{
                "US": "English",
                "PT": "Português",
                "ES": "Español",
                "DE": "Deutsch",
                "FR": "Français",
              }}
            />
            </div>
            <IconButton disableRipple={true} className={classes.button}>
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
