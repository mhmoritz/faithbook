import React, { Component } from 'react';
import './App.css';
import Feed from './Feed.js';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*Load external resources*/}
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        {/*Render Content*/}
        <NavigationBar/>
        <Feed/>
      </div>
    );
  }
}

export default App;
