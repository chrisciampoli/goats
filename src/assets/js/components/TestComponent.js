import { Component } from 'react-class-helper';

const React = require('react');

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <p>Here!</p>
      );
    }
}

module.exports = TestComponent;
