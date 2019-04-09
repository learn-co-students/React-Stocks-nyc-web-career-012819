import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar change={this.props.change} filter={this.props.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} clickHandler={this.props.addFav}/>

            </div>
            <div className="col-4">

              <PortfolioContainer favorite={this.props.favorite} clickHandler={this.props.remove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
