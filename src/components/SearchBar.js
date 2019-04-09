import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={props.currentSort === 'Alphabetically' ? true : false} 
          onChange={props.handleSortChanged}
        />
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          value="Price" 
          checked={props.currentSort === 'Price' ? true : false} 
          onChange={props.handleSortChanged}
        />
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilterChanged}>
          <option value="All" selected={props.currentFilter === 'All' ? 'selected' : null}>All</option>
          <option value="Tech" selected={props.currentFilter === 'Tech' ? 'selected' : null}>Tech</option>
          <option value="Sportswear" selected={props.currentFilter === 'Sportswear' ? 'selected' : null}>Sportswear</option>
          <option value="Finance" selected={props.currentFilter === 'Finance' ? 'selected' : null}>Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
