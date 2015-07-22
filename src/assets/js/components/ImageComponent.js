import { Component } from 'react-class-helper';

const React = require('react');

class ImageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: this.props.images
        }

    }

    render() {
      var images = this.props.images.map((image, index) => {
        return (
          <img key={index} src={image.url} />
        );
      });
      return (
        <div>
          {images}
        </div>
      );
    }
}

module.exports = ImageComponent;
