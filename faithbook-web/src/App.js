import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Feed from './Feed.js';
import AppBar from './AppBar';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar />
          <SideBar />
          <Route exact path='/:category' component={Feed} />
        </div>
      </Router>
    );
  }
}

export default App;
