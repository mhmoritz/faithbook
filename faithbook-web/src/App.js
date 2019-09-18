import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Feed from './Feed.js';
import Footer from './Footer.js';
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
              <Redirect exact from="/" to="/feed/daily" />
              <Redirect exact from="/feed" to="/feed/daily" />
              <Route exact path='/feed/:category' component={Feed} />
            </Switch>
          </div>
        <Footer />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
