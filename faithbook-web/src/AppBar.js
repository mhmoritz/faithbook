import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideBar, setLanguage } from './actions';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import TranslationSelector from './TranslationSelector';
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
  onSelectLanguage = (countryCode) => {
    let language = countryCode.toLowerCase()
    this.props.setLanguage(language);
  }

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
                onSelect={this.onSelectLanguage}
              />
            </div>
            <TranslationSelector />
          </Toolbar>
        </AppBar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSideBar: () => dispatch(openSideBar()),
  setLanguage: (language) => dispatch(setLanguage(language))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavigationBar));
