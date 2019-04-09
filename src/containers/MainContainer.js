import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

const API_URL = 'http://localhost:3000/stocks';

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortBy: 'Alphabetically',
    filter: 'All',
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => this.setState({ stocks: this.sortStocks(json, 'name') }));
  }

  handleSortChanged = (e) => {
    switch(e.target.value) {
      case 'Alphabetically':
        this.setState({ 
          stocks: [...this.sortStocks(this.state.stocks, 'name')],
          sortBy: 'Alphabetically',
        });
        break;
      case 'Price':
        this.setState({ 
          stocks: [...this.sortStocks(this.state.stocks, 'price')],
          sortBy: 'Price',
        });
        break;
      default:
        break;
    }
  }

  handleFilterChanged = (e) => {
    this.setState({
      filter: e.target.value,
    });
  }

  handleStockClick = (id, source) => {
    switch(source) {
      case 'stocks':
        this.addToPortfolio(id);
        break;
      case 'portfolio':
        this.removeFromPortfolio(id);
        break;
      default:
        break;
    }
  }

  addToPortfolio(id) {
    const index = this.state.stocks.findIndex(stock => stock.id === id)
    const asset = this.state.stocks.splice(index, 1)[0];

    this.setState({
      stocks: [...this.state.stocks],
      portfolio: [...this.state.portfolio, asset],
    });
  }

  removeFromPortfolio(id) {
    const index = this.state.portfolio.findIndex(stock => stock.id === id)
    const asset = this.state.portfolio.splice(index, 1)[0];

    this.setState({
      stocks: [...this.state.stocks, asset],
      portfolio: [...this.state.portfolio],
    });
  }

  sortStocks(array, attribute) {
    return array.sort((a, b) => {
      if (a[attribute] > b[attribute] ) return 1
      if (a[attribute] === b[attribute]) return 0
      if (a[attribute] < b[attribute]) return -1
    })
  }

  filterStocks = () => {
    if (this.state.filter === 'All') {
      return this.state.stocks;
    } else {
      return this.state.stocks.filter(stock => stock.type === this.state.filter);
    }
  }

  render() {
    return (
      <div>
        <SearchBar 
          currentSort={this.state.sortBy} 
          currentFilter={this.state.filter}
          handleSortChanged={this.handleSortChanged}
          handleFilterChanged={this.handleFilterChanged}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer data={this.filterStocks()} clickHandler={this.handleStockClick} />
          </div>
          <div className="col-4">
            <PortfolioContainer data={this.state.portfolio} clickHandler={this.handleStockClick} />
          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
