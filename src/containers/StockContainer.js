import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    let stocksArr = this.props.stocks.map(stock => <Stock stock={stock} clickHandler={this.props.clickHandler}/>)
    console.log("constainer", this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stocksArr
        }
      </div>
    );
  }

}

export default StockContainer;
