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
      searchResults: [],
      addToPlaylist: [],
      playlistName: '',
    };

    this.searchSpotify = this.searchSpotify.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.setPlaylistName = this.setPlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  searchSpotify(input) {
    Spotify.search(input).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  addTrack(track) {
    this.setState({ addToPlaylist: this.state.addToPlaylist.concat(track) });
  }

  removeTrack(track) {
    let tracks = this.state.addToPlaylist;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({addToPlaylist: tracks});
  }

  setPlaylistName(playlistName) {
    this.setState({ playlistName: playlistName });
  }

  savePlaylist() {
    const trackUris = this.state.addToPlaylist.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: '',
        addToPlaylist: []
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchSpotify={this.searchSpotify}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist addToPlaylist={this.state.addToPlaylist} onRemove={this.removeTrack} onSave={this.savePlaylist} onSetName={this.setPlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
