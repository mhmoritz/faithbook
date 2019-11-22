import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Feed from './Feed';
import Footer from './Footer';
import { Terms, Privacy } from './Legals';
import AppBar from './AppBar';
import SideBar from './SideBar';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppBar />
        <SideBar />
        <Switch>
          <Redirect exact from="/" to="/feed" />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
