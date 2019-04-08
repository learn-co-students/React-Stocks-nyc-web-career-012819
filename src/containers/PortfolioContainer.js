import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stocks = this.props.portfolio.map(stock => {
      return <Stock stock={stock.stock} key={stock.stock.id} handleClick={this.props.handleSell} />
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {stocks}
      </div>
    );
  }

}

export default PortfolioContainer;
