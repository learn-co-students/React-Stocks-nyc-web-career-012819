import React from 'react';
import Stock from '../components/Stock';

const PortfolioContainer = (props) => {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          props.data.map(stock => 
            <Stock 
              key={stock.id} 
              id={stock.id} 
              name={stock.name} 
              price={stock.price} 
              clickHandler={props.clickHandler}
              source='portfolio'
            />
          )
        }
      </div>
    );
}

export default PortfolioContainer;
