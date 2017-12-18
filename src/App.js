import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicContainer from './containers/MusicContainer'
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MusicContainer />
      </div>
    );
  }
}

export default App;
