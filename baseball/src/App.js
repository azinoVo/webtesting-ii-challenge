import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ball: 0,
      strike: 0,
      foul: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Let's Play Ball!</h1>
        <div className='display'>
          <p>Ball: {this.state.ball}</p>
          <p>Strike: {this.state.strike}</p>
          <p>Foul: {this.state.foul}</p>
        </div>

        <button onClick={this.strike}>Strike</button>
        <button onClick={this.ball}>Ball</button>
        <button onClick={this.foul}>Foul</button>
        <button onClick={this.hit}>Hit</button>
      </div>
    );
  }

  strike = event => {
    event.preventDefault();

    if (this.state.strike === 2) {
      this.setState({
        ...this.state,
        ball: 0,
        strike: 0
      })
    } else {
      this.setState({
        ...this.state,
        strike: this.state.strike + 1
      })
    }
  }

  ball = event => {
    event.preventDefault();

    if (this.state.ball === 3) {
      this.setState({
        ...this.state,
        ball: 0,
        strike: 0
      })
    } else {
      this.setState({
        ...this.state,
        ball: this.state.ball + 1
      })
    }
  }

  foul = event => {
    event.preventDefault();

    if (this.state.strike === 0 || this.state.strike === 1) {
      this.setState({
        ...this.state,
        strike: this.state.strike + 1
      })
    }
  }

  hit = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      ball: 0,
      strike: 0
    })
  }


}

export default App;