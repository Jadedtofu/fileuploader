import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input 
          placeholder="Search term" 
          value={this.props.searchTerm}
          onChange={event => this.props.handleUpdate(event.target.value)}/> />
      </div>   
    );
  }
}

export default SearchBox;
