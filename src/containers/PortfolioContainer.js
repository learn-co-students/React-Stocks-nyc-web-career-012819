import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stocks = this.props.favorite.map(stockObj => {
      return <Stock key={stockObj.id} stock={stockObj} clickHandler={this.props.clickHandler}/>
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
