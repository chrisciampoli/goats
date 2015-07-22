const React = require("react");
// Support Classes
import Repository from './utils/Repository';
import Container from './utils/Container';

// Modules
import InstagramModule from './modules/InstagramModule';

class Goats {
  constructor() {
    console.log('Goats is booting!');
  }

  run() {
    this.modules = this.buildModules();
    this.container = new Container(this);

    console.log('Goats is load mmmmmmmm!');
  }

  buildModules() {
    var repository = new Repository();
    repository.add('instagramModule', InstagramModule);

    return repository;
  }

  getModule(name) {
    return this.modules.fetch(name);
  }

}

module.exports = Goats;
