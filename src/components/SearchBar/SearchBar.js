import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.searchSpotify(this.state.input);

    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song Title" onChange={this.handleInputChange} />
        <a onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
