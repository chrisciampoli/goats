import { Component } from 'react-class-helper';

const React = require('react');

class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <img src="#" />
      );
    }
}

module.exports = ImageComponent;
