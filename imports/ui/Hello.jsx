import React, { Component } from 'react';

export default class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h2> Hi </h2>
        <button onClick={() => this.increment()} class="button-primary">Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    );
  }
}
