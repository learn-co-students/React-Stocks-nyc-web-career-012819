import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    favorite: [],
    filter: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(res => res.json())
      .then(data => this.setState({stocks: data}))
  }

  addToFavorite = (stock) => {
    let newArr = [...this.state.favorite, stock]
    this.setState({favorite: newArr})
  }

  removeFavorite = (stock) => {
    let newArr = [...this.state.favorite]
    let withoutSelectedStock = newArr.filter(stocks => {
      return stocks.id !== stock.id
    })
    this.setState({favorite: withoutSelectedStock})
  }

  changeHandler = (filter) => {
    if (filter === 'Alphabetically') {
      let newArr = [...this.state.stocks]
      let filtered = newArr.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
      this.setState({stocks: filtered})
      } else if (filter === 'Price') {
      let newArr = [...this.state.stocks]
      let filtered = newArr.sort((a,b) => {
        return b.price - a.price
      })
      this.setState({stocks: filtered})
    }
  }

  filterHandler = (filter) => {
    let newArr = [...this.state.stocks]
    let filtered = newArr.filter(stock => {
      return stock.type === filter
    })
    this.setState({filter: filtered})
  }


  render() {
    return (
      <div>
        <Header/>
        <MainContainer
          stocks={this.state.filter.length > 0 ? this.state.filter : this.state.stocks}
          addFav={this.addToFavorite}
          favorite={this.state.favorite}
          remove={this.removeFavorite}
          change={this.changeHandler}
          filter={this.filterHandler}
        />
      </div>
    );
  }
}

export default App;
