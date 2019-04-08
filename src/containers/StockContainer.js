import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    const stocks = this.props.stocks.map(stock => {
      return (
        <Stock
          key={stock.id}
          {...stock}
          clickListener={this.props.clickListener}
        />
      );
    });
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }
}

export default StockContainer;
