const store = require('store');

class Instagram {

  constructor() {
    this.stateData = {
      feed: [],
      images: [],
      controller: {}
    };
  }

  init(data, controller) {
    this.setFeed(data.data);
    this.setImages(data.images);
    console.log(controller);
    this.setController(controller);
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
    var controller = this.getController();
    console.log(controller.state);
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
      } catch (e) {
        // fail silent
      }
    }
  }

}

module.exports = Instagram;
