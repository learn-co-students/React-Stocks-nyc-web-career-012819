import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  onClickHandler = (boughtStock) => {
    this.props.boughtStocks(boughtStock)
  }

  render() {

    let stockArr = this.props.stocks.map((stock) => {
      return <Stock stockObj={stock} key={stock.id} onClickHandler={boughtStock => this.onClickHandler(boughtStock)}/>
    })

    return (
      <div>
        <h2>Stocks</h2>
        {
          stockArr
        }
      </div>
    );
  }

}

export default StockContainer;
