const store = require('store');

class Instagram {

  constructor() {
    this.stateData = {
      feed: [],
      images: []
    };
  }

  init(data) {
    this.setFeed(data.data);
    this.setImages(data.images);
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

}

module.exports = Instagram;
