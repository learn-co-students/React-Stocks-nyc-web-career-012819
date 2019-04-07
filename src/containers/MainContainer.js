import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    stockBought: [],
    filtered: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  boughtStockHandler = (stock) => {
    let newArr = [...this.state.stockBought]
    let check = newArr.filter((stockObj) => {
      return stock.id === stockObj.id
    })
    if (check.length === 0) {
      newArr.push(stock)
    }
    this.setState({
      stockBought: newArr
    })
  }

  soldStockHandler = (stock) => {
    let newArr = [...this.state.stockBought]
    let exceptSold = newArr.filter((stockObj) => {
      return stockObj.id !== stock.id
    })
    this.setState({
      stockBought: exceptSold
    })
  }

  sortStockHandler = (sortingCriteria) =>{
    let newArr = [...this.state.stocks]
    if(sortingCriteria.priceChecked === true) {
      newArr.sort((a,b) => {
        return a.price - b.price;
      })
    } else if (sortingCriteria.alphabeticallyChecked === true){
      newArr.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    }
    this.setState({
      stocks: newArr
    })
  }

  filterHandler = (filterCriteria) => {
    let newArr = [...this.state.stocks]
    let filteredArr = newArr.filter((stock) => {
      return stock.type === filterCriteria
    })
    this.setState({
      filtered: filteredArr
    })
  }

  render() {

    return (
      <div>
        <SearchBar sortStock={sortingCriteria => this.sortStockHandler(sortingCriteria)} filterBy={filterCriteria => this.filterHandler(filterCriteria)}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filtered.length === 0?this.state.stocks : this.state.filtered} boughtStocks={stocks => this.boughtStockHandler(stocks)}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStockObj={this.state.stockBought} soldStocks={stocks => this.soldStockHandler(stocks)}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
