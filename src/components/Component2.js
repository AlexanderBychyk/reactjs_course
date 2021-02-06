import React, { Component } from 'react';

export class Component2 extends React.Component {
    render() {
      return React.createElement('h1', {}, 'Hello World from "React.createElement"');
    }
  }