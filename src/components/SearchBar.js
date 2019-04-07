import React from 'react';

class SearchBar extends React.Component {

  state = {
    alphabeticallyChecked: false,
    priceChecked: false
  }

  changeHandler = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState({
        alphabeticallyChecked: true,
        priceChecked: false
      }, () => this.props.sortStock(this.state))
    }
    if (e.target.value === "Price") {
      this.setState({
        alphabeticallyChecked: false,
        priceChecked: true
      }, () => this.props.sortStock(this.state))
    }
    // this.props.sortStock(this.state)
  }

  render(){
    return (
      <div>

      <strong>Sort by:</strong>
      <label>
      <input type="radio" value="Alphabetically" checked={this.state.alphabeticallyChecked} onChange={this.changeHandler}/>
      Alphabetically
      </label>
      <label>
      <input type="radio" value="Price" checked={this.state.priceChecked} onChange={this.changeHandler}/>
      Price
      </label>
      <br/>

      <label>
      <strong>Filter:</strong>
      <select onChange={(e) => this.props.filterBy(e.target.value)}>
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
