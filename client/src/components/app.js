import React from 'react';
import { Component } from 'react';

export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}
