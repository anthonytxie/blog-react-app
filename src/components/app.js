import React, { Component } from 'react';

export default class App extends Component {
  render() {
    // we need to render the child component within app
    return <div>{this.props.children}</div>;
  }
}
