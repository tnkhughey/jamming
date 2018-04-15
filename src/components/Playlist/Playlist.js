import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetPlaylistName = this.handleSetPlaylistName.bind(this);
    this.handleSavePlaylist = this.handleSavePlaylist.bind(this);
  }

  handleSavePlaylist() {
    this.props.onSave();
  }

  handleSetPlaylistName(event) {
    this.props.onSetName(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input placeholder='New Playlist' onChange={this.handleSetPlaylistName}/>
        <TrackList tracks={this.props.addToPlaylist} isRemoval={true} onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.handleSavePlaylist}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
