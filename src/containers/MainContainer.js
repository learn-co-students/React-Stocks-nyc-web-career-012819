import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(stocks => this.setState({stocks}))
  }

  addStock = stock => {
    this.setState(prevState => ({
      portfolio: [...prevState.portfolio, stock]
    }))
  }

  removeStock = stock => {
    const portfolioClone = this.state.portfolio
    const index = this.state.portfolio.indexOf(stock)
    portfolioClone.splice(index,1)
    this.setState({portfolio: portfolioClone})
  }

  changeHandler = e => {
    if (e.target.value === "Alphabetically") {
      e.target.parentNode.nextSibling.children[0].checked = false
      if (this.state.filteredStocks.length === 0) {
        const sorted = [...this.state.stocks].sort((a,b) => a.ticker.localeCompare(b.ticker))
        this.setState({stocks: sorted})
      } else {
        const sorted = [...this.state.filteredStocks].sort((a,b) => a.ticker.localeCompare(b.ticker))
        this.setState({filteredStocks: sorted})
      }
    } else if (e.target.value === "Price") {
      e.target.parentNode.previousSibling.children[0].checked = false
      if (this.state.filteredStocks.length === 0) {
        const sorted = [...this.state.stocks].sort((a,b) => a.price.toString().localeCompare(b.price.toString(), undefined, { numeric: true}))
        this.setState({stocks: sorted})
      } else {
        const sorted = [...this.state.filteredStocks].sort((a,b) => a.price.toString().localeCompare(b.price.toString(), undefined, { numeric: true}))
        this.setState({filteredStocks: sorted})
      }
    }
  }

  filter = e => {
    if (e.target.value === 'All') {
      this.setState({filteredStocks: []})
    } else {
      const filterStocks = [...this.state.stocks].filter(stockObj => stockObj.type === e.target.value)
      this.setState({filteredStocks: filterStocks})
    }
  }

  render() {
    return (
      <div>
        <SearchBar change={this.changeHandler} filter={this.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredStocks.length === 0 ? this.state.stocks : this.state.filteredStocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
