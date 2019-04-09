import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: ''
  }

  componentDidMount() {
    console.log("App is mounted");
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({ stocks }))
  }

  clickHandler = (stock) => {
    let newArr = [...this.state.portfolio, stock]
    this.setState({
      portfolio: newArr
    })
  }

  removeClickHandler = (stock) => {
    let arr = this.state.portfolio.filter(stockObj =>
      stockObj.id !== stock.id)
      this.setState({
        portfolio: arr
      })
  }

  handleChange = (event) => {
      this.setState({filter: event.target.value})
  }

  render() {

    let filterStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)
    if(!this.state.filter || this.state.filter === 'All') {
      filterStocks = this.state.stocks
    }
    // console.log(this.state.stocks)
    return (
      <div>
        <SearchBar handleChange={this.handleChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filterStocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} clickHandler={this.removeClickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
