import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({stocks}))
  }

  clickHandlerBuy = (stock) => {
    if(this.state.portfolio.includes(stock)){
      null
    } else {
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  clickHandlerSell = (stock) => {
    let newArray = this.state.portfolio.filter(stockObj => stockObj.id !== stock.id)
    console.log(newArray)
    this.setState({portfolio: newArray})
  }

  changeHandler = (e) => {
    const filter = e.target.value
    this.filterStocks(filter)
  }


  filterStocks = (filter) => {
    if (filter === 'Alphabetically'){
      let alphabeticalArray = this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
      this.setState({stocks: alphabeticalArray})
    } else if (filter === 'Price') {
      let priceFilterArray = this.state.stocks.sort(function(a, b){return a.price-b.price})
      this.setState({stocks: priceFilterArray})
    } else {
      const filteredArray = this.state.stocks.filter(stock => stock.type === filter)
      console.log(filteredArray)
      this.setState({filteredStocks: filteredArray})
    }
  }

  render() {
    console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar changeHandler={this.changeHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredStocks ? this.state.filteredStocks : this.state.stocks} clickHandler={this.clickHandlerBuy}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} clickHandler={this.clickHandlerSell} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
