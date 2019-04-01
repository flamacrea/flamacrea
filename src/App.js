import React, { Component } from 'react';
import './App.css';
import AppHeader from './sections/header.js';
import Manifesto from './sections/manifesto';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
      </div>
    );
  }
}

export default App;
