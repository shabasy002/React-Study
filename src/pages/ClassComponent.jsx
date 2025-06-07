import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
   handleClickDecrease() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }
    handleClickReset() {
    this.setState(prevState => ({
      count: 0
    }));
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleClickReset}>Reset</button>
        <button onClick={this.handleClickDecrease}>Decrement</button>
        
      </div>
    );
  }
}

export default Counter;