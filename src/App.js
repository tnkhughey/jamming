import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';
import Spotify from './util/Spotify/Spotify.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify(input) {
    Spotify.search(input).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <SearchBar searchSpotify={this.searchSpotify}/>
        <SearchResults searchResults={this.state.searchResults}/>
        <Playlist />
      </div>
    );
  }
}

export default App;
