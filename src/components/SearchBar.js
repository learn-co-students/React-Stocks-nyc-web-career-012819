import React from "react";

const SearchBar = props => (
  <div>
    <strong>Sort by:</strong>
    <label>
      <input
        type="radio"
        value="Alphabetically"
        checked={props.alphabetSort}
        onChange={props.clickAlphabetListener}
      />
      Alphabetically
    </label>
    <label>
      <input
        type="radio"
        value="Price"
        checked={props.priceSort}
        onChange={props.clickPriceListener}
      />
      Price
    </label>
    <br />

    <label>
      <strong>Filter:</strong>
      <select onChange={e => props.changeListener(e.target.value)}>
        <option value="Tech">Tech</option>
        <option value="Sportswear">Sportswear</option>
        <option value="Finance">Finance</option>
      </select>
    </label>
  </div>
);

export default SearchBar;
