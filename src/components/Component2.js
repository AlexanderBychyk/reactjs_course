import React, { Component } from 'react';

export default class Component2 extends Component {
  render(){
    return React.createElement('h1', {}, 'Hello World from "React.createElement"');
  }
}