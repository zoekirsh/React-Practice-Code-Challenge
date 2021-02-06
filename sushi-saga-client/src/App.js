import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    money: 200,
    plates: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      sushis: data
    }))
  }

  eatSushi = (price) => {
    let reducedMoney = this.state.money - price 
    let addPlate = [...this.state.plates, "p"]
    if (reducedMoney > 0 ) {
      this.setState({
        money: reducedMoney,
        plates: addPlate
      })
    } else {
      alert("YA BROKE. NO MORE SUSHI")
    }
  }

  moreSushi = () => {
    let newIndex = this.state.index + 4
    this.setState({
      index: newIndex
    })
  }

  //only pass 4 sushi
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.index, (this.state.index +4))} eatSushi={this.eatSushi} moreSushi={this.moreSushi}/>
        <Table money={this.state.money} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;