import React, { Component } from 'react';
import './App.css';
import Feed from './Feed.js';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Feed/>
      </div>
    );
  }
}

export default App;
