import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar.js';
import AppPlaylist from './components/AppPlaylist/AppPlaylist.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <SearchBar />
        <AppPlaylist />
      </div>
    );
  }
}

export default App;
