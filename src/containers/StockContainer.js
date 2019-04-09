import React from 'react';
import Stock from '../components/Stock';

const StockContainer = (props) => {
  return (
    <div>
      <h2>Stocks</h2>
      {
        props.data.map(stock => 
          <Stock 
            key={stock.id} 
            id={stock.id} 
            name={stock.name} 
            price={stock.price} 
            clickHandler={props.clickHandler}
            source='stocks'
          />
        )
      }
    </div>
  );
}

export default StockContainer;
