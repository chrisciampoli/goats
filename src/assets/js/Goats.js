const React = require("react");
// Support Classes
import Repository from './Classes';

// Modules
import TestModule from './modules/TestModule';

class Goats {
  constructor() {
    console.log('Goats is booting!');
  }

  run() {
    this.modules = this.buildModules();
    console.log('Goats is load mmmmmmmm!');
  }

  buildModules() {
    var repository = new Repository();
    repository.add('testModule', TestModule);

    return repository;
  }

  getModule(name) {
    return this.modules.fetch(name);
  }

}

module.exports = Goats;
