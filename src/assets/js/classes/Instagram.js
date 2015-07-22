const store = require('store');

class Instagram {

  constructor() {
    this.stateData = {
      feed: []
    };
  }

  init(data) {
    this.setFeed(data);
  }

  setFeed(data) {
    this.stateData.feed = data;
  }

  getFeed() {
    return this.stateData.feed;
  }
}

module.exports = Instagram;
