import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from './ListItem/ListItem';

// responsible for taking array of files as a prop and displaying
// a ListItem for each file in the array with .map
export default class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
        .filter(file => file.name.includes(searchTerm)     // filtering to match search text and filter type
           && (filterOption === 'All' || file.status === filterOption))
        .map((file, key) => <ListItem {...file} key={key} />);      // not sure what's going on in {...file}
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};
