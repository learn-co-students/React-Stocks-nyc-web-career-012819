import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stocksArr = this.props.portfolio.map(stock => <Stock stock={stock} clickHandler={this.props.clickHandler}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            stocksArr
          }
      </div>
    );
  }

}

export default PortfolioContainer;
