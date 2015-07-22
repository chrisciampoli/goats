import { Component } from 'react-class-helper';

import ImageComponent from '../components/ImageComponent';

const React = require('react');

class InstagramController extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: this.props.images
        }
    }

    componentDidMount() {
      this.props.di('instagram').setController(this);
    }

    render() {
      return (
        <ImageComponent images={this.state.images} />
      );
    }
}

module.exports = InstagramController;
