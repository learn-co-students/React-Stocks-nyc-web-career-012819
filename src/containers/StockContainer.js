import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let stocks = this.props.stocks.map(stock => (
      <Stock stock={stock} key={stock.id} handleClick={this.props.handleClick}/>
    ))
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }

}

export default StockContainer;
