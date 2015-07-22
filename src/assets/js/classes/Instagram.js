const store = require('store');

class Instagram {

  constructor() {
    this.stateData = {
      feed: [],
      images: [],
      controller: {}
    };
  }

  init(data) {
    this.setFeed(data.data);
    this.setImages(data.images);
  }

  setController(controller) {
    this.stateData.controller = controller;
  }

  getController() {
    return this.stateData.controller;
  }

  setFeed(data) {
    this.stateData.feed = data;
  }

  getFeed() {
    return this.stateData.feed;
  }

  setImages(images) {
    this.stateData.images = images;
  }

  getImages() {
    return this.stateData.images;
  }

  removeImage(image) {
    var images = this.getImages();
    var length = images.length;
    for (var i = 0; i < length;i++) {
      try {
        if (images[i].hasOwnProperty) {
          if (images[i].url == image) {
            images.splice(i, 1);
          }
        }
        this.setImages(images);
        var controller = this.getController();
        controller.setState({images: images});
      } catch (e) {
        // fail silent
      }
    }
  }

}

module.exports = Instagram;
