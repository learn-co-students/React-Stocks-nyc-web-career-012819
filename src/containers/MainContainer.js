import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sorted: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(stocks => this.setState({stocks}))
  }

  clickHandler = (stock) => {
    const portfolio = [...this.state.portfolio, stock]
    this.setState({portfolio})
  }

  removeStock = (stock) => {
    const portfolio = this.state.portfolio.filter(stockObj => {
      return !(stockObj.id === stock.id)
    })
    this.setState({portfolio})
  }

  changeHandler = (e) => {
    this.setState({sorted: []})
    if (e.target.value === "Alphabetically") {
      const sorted = this.state.stocks.sort((a, b) => {
        return a.ticker.localeCompare(b.ticker)
      })
      this.setState({sorted})
    } else if(e.target.value === "Price"){
      const sorted = this.state.stocks.sort((a, b) => {
        return a.price - b.price
      })
      this.setState({sorted})
    } else {
      this.setState({sorted: []})
    }
    e.target.checked = false
  }

  onChangeHandler = (type) => {
    if(type === "All"){
      this.setState({sorted: []})
    } else {
      const sorted = this.state.stocks.filter(stock => {
        return stock.type === type
      })
      this.setState({sorted})
    }
  }

  render() {
    return (
      <div>
        <SearchBar onChangeHandler={this.onChangeHandler} changeHandler={this.changeHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                clickHandler={this.clickHandler}
                stocks={
                  this.state.sorted.length > 0 ?
                  this.state.sorted :
                  this.state.stocks
                }
              />

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.removeStock} stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

// * allow a user to filter stocks based on the type of the stock.
// need a function that takes in the type
// with the type filter the list in stocks
// set the state of the current stocks to  the new filtered list
