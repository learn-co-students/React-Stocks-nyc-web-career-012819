import React from 'react';

class SearchBar extends React.Component {

  state = {
    alphabet: false,
    price: false
  }

  changeHandler = (ev) => {
    if (ev.target.value === 'Alphabetically'){
      this.setState({alphabet: true, price: false})
      this.props.change(ev.target.value)
    } else if (ev.target.value === 'Price') {
      this.setState({alphabet: false, price: true})
      this.props.change(ev.target.value)
    }
  }

  filterHandler = (ev) => {
    this.props.filter(ev.target.value)
  }

  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.alphabet} onChange={this.changeHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.price} onChange={this.changeHandler}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.filterHandler}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    );
  }
}


export default SearchBar;
