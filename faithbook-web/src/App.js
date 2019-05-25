import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Feed from './Feed.js';
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
            <Route exact path='/:category' component={Feed} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
