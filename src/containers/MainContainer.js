import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    alphabetSort: false,
    priceSort: false,
    filterTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(r => r.json())
      .then(stocks => this.setState({ stocks }));
  }

  clickListener = stock => {
    console.log(stock);
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    });
    // right now, adds the same stock bottom. still people can still buy
    // multiple stocks, it would be nicer to have number of stocks displayed.
  };

  sellStock = stock => {
    this.setState({
      portfolio: this.state.portfolio.filter(
        stockObj => stockObj.id !== stock.id
      )
    });
  };

  clickAlphabetListener = () => {
    this.setState(
      {
        alphabetSort: !this.state.alphabetSort,
        priceSort: false
      },
      () => this.sortSelected()
    );
  };
  // (both above and below func) if other option is selected, deselect other one.
  clickPriceListener = () => {
    this.setState(
      {
        priceSort: !this.state.priceSort,
        alphabetSort: false
      },
      () => this.sortSelected()
    );
  };
  // if none is selected, how do I go back to original sorting?
  sortSelected = () => {
    if (this.state.priceSort) {
      const sortedList = this.state.stocks.sort((x, y) => {
        return x.price - y.price;
      });
      this.setState({ stocks: [...sortedList] });
    } else if (this.state.alphabetSort) {
      const sortedList = this.state.stocks.sort((x, y) => {
        let charX = x.name.toLowerCase();
        let charY = y.name.toLowerCase();
        return charX.localeCompare(charY);
      });
      this.setState({ stocks: [...sortedList] });
    }
  };

  changeListener = selectedType => {
    // coming from search bar
    this.setState({ filterTerm: selectedType });
  };

  updateStateStocks = () => {
    return this.state.stocks.filter(stock =>
      stock.type.includes(this.state.filterTerm)
    );
  };
  // my Portfolio sell and buy isn't working properly, can't figure out.
  render() {
    // console.log(this.state.alphabetSort, this.state.priceSort);
    return (
      <div>
        <SearchBar
          clickAlphabetListener={this.clickAlphabetListener}
          alphabetSort={this.state.alphabetSort}
          clickPriceListener={this.clickPriceListener}
          priceSort={this.state.priceSort}
          changeListener={this.changeListener}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.updateStateStocks()}
              clickListener={this.clickListener}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              clickListener={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
