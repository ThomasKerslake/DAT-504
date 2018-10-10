import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count:15,
    count2: 12
  }

  addNum = () =>{
    console.log('Increase');
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count2 + 1
    })
  }

  minNum = () =>{
    console.log('Decrease');
    this.setState({
      count: this.state.count - 1,
      count2: this.state.count2 - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.minNum}>-</button>
        <span>{this.state.count} </span>

        <span> {this.state.count2}</span>
        <button onClick={this.addNum}>+</button>
      </div>
    );
  }

}



export default Counter;
