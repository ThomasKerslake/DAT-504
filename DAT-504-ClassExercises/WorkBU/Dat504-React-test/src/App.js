import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    washCount:1
  }

  addNum = () =>{
    this.setState({
      washCount: this.state.washCount + 1,
    })
  }

  minNum = () =>{
    this.setState({
      washCount: this.state.washCount - 1,
    })
    if (this.state.washCount < 0) this.state.washCount = 0;
  }



  render() {
    return (
      <div>
        <input id="userInputWash" value={this.state.washCount}name="timesWorn" onkeypress="return false;"/>
        <button id="reactBtn" type="button" onClick={this.addNum}>ADD</button>
        <button id="reactBtn" type="button" onClick={this.minNum}>MIN</button>
      </div>
    );
  }

}



export default Counter;
