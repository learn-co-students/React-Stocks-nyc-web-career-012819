import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks: [],
    portfolio: [],
    filteredParam: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => (
      this.setState({ stocks: data })
    ))
  }

  handleClick = (stock) => {
    this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  handleSell = (wantedStock) => {
    let portfolio = this.state.portfolio.filter(stock => {
      return stock.stock.id !== wantedStock.stock.id
    })
    this.setState({portfolio})
  }

  handleChange = (sortParam) => {
    if (sortParam === 'Price') {
      let stocks = this.state.stocks.sort((a,b) => {
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
      })
      this.setState({stocks})
    } else if (sortParam === 'Alphabetically') {
      let stocks = this.state.stocks.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
      this.setState({stocks})
    }
  }

  handleFilter = (filterParam) => {
    // console.log(stock.type);
    console.log(filterParam);
    let stocks = this.state.stocks.filter(stock => {
      console.log(stock.type);
      return stock.type === filterParam
    })
    console.log(stocks);
    this.setState({filteredParam: stocks})
  }

  render() {
    return (
      <div>
        <SearchBar handleChange={this.handleChange} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredParam} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleSell={this.handleSell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
