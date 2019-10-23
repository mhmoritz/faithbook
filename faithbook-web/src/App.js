import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Feed from './Feed.js';
import Footer from './Footer.js';
import {Terms, Privacy, FAQ, ManageConsent} from "./Legals.js";
import AppBar from './AppBar';
import SideBar from './SideBar';
import connectionHandler from './ConnectionHandler';
import { setLanguage } from './actions';
import { connect } from 'react-redux';

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

class App extends Component {

  componentWillMount() {
    connectionHandler.fetchUserLanguage(this.props.setLanguage);
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <AppBar />
            <SideBar />
            <Switch>
              <Redirect exact from="/" to="/feed/daily" />
              <Redirect exact from="/feed" to="/feed/daily" />
              <Route exact path='/feed/:category' component={Feed} />
              <Route exact path='/terms' component={Terms} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/faq' component={FAQ} />
              <Route exact path='/manageconsent' component={ManageConsent} />
            </Switch>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLanguage: (language) => dispatch(setLanguage(language)),
});

export default connect(null, mapDispatchToProps)(App);
