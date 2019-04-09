import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stockArr = this.props.portfolio.map(stock => (
      <Stock key={stock.id} stock={stock} clickHandler={this.props.clickHandler}/>
    ))
    return (
      <div>
        <h2>My Portfolio</h2>
          {stockArr}
      </div>
    );
  }

}

export default PortfolioContainer;
