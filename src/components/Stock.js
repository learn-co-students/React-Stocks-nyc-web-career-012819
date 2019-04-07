import React from 'react'

class Stock extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
    this.props.onClickHandler(this.props.stockObj)
  }

  render() {
    return (
      <div>
      <div className="card" onClick={this.clickHandler}>
      <div className="card-body">
      <h5 className="card-title">{
        //Company Name
        this.props.stockObj.name
      }</h5>
      <p className="card-text">{
        //ticker: stock price
        this.props.stockObj.price
      }</p>
      </div>
      </div>


      </div>
    )
  }
}


export default Stock
