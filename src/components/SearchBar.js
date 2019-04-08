import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={props.changeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={props.changeHandler}/>
        Price
      </label>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.onChangeHandler(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
