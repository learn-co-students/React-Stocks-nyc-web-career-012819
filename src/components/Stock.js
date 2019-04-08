import React from 'react'

class Stock extends React.Component {

  handleClick = e => {
    this.props.handleClick(this.props)
  }

  render() {
    // console.log(this.props.stock.stock);
    return (
      <div>
        <div className="card" onClick={this.handleClick}>
          <div className="card-body">
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">{this.props.stock.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock
