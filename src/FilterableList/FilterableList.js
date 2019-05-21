import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

// responsible for taking array of files as a prop and displaying
// a ListItem for each file in the array with .map
class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
        .filter(file => file.name.includes(searchTerm)     // filtering to match search text and filter type
           && (filterOption === 'All' || file.status === filterOption))
        .map((file, key) => <ListItem {...file} key={key} />);      // what is happening in {...file} ...?
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

export default FilterableList;
