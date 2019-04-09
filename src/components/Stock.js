import React, { Fragment } from 'react';

const Stock = (props) => (
  <Fragment>
    <div className="card" onClick={() => props.clickHandler(props.id, props.source)}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
      </div>
    </div>
  </Fragment>
);

export default Stock;
