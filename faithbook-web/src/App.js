import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Feed from './Feed.js';
import Footer from './Footer.js';
import {Terms, Privacy, FAQ, ManageConsent} from "./Legals.js";
import AppBar from './AppBar';
import SideBar from './SideBar';

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <AppBar />
            <SideBar />
            <Switch>
              <Redirect exact from="/" to="/feed" />
              <Route exact path='/feed' component={Feed} />
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

export default App;
