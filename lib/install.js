// implement procedure to download and install typings for some vendor libs

const { utils } = require('ai-core');
const { shell } = utils; 

const Preferences = require('../preferences');
const registry = require('../../../registry/typings.json')

// TODO: use registry/typings.json for custom install procedures
module.exports = class Install {
  constructor(name) {
    this.name = name;
    this.preferences = new Preferences();    
  }

  get location() {
    return registry[this.name] || `dt~${this.name}`;
  }

  install(done) {
    if (!this.preferences.useTypeScript) {
      // log.info('ABORT: Typescript not detected in project')
      done();
    }

    // global is the new ambient!
    if (this.location) {
      shellCmd('typings', ['install', this.location, '--global'], done);
    } else {
      log.info(`No typings registered for ${this.name}`);
    }    
  }
}