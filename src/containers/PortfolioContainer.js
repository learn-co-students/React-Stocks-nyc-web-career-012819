import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  onClickHandler = (soldStock) => {
    this.props.soldStocks(soldStock)
  }

  render() {

    let myStock = this.props.boughtStockObj.map((stock) => {
      return <Stock stockObj={stock} key={stock.id} onClickHandler={soldStock => this.onClickHandler(soldStock)}/>
    })

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            myStock
          }
      </div>
    );
  }

}

export default PortfolioContainer;
