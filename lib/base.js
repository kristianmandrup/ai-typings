// implement procedure to download and install typings for some vendor libs

const { Preferences, utils } = require('ai-core');
const { shell } = utils; 
const registry = require('./').registry;

// TODO: use registry/typings.json for custom install procedures
module.exports = class Base {
  constructor(name) {
    this.name = name;
    this.preferences = new Preferences();    
  }

  get location() {
    return registry[this.name] || `dt~${this.name}`;
  }

  get commandName() {
    return 'install';
  }

  get command() {
    return [this.commandName, this.location, '--global'];
  }

  run(done) {
    if (!this.preferences.useTypeScript) {
      // log.info('ABORT: Typescript not detected in project')
      // done();
    }

    // global is the new ambient!
    if (this.location) {
      shellCmd('typings', this.command, done);
    } else {
      log.info(`No typings registered for ${this.name}`);
    }    
  }
}