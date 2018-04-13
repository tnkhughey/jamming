import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class AppPlaylist extends React.Component {
  render() {
    return (
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    );
  }
}

export default AppPlaylist;
