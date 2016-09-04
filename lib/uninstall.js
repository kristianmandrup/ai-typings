const Base = require('./base');

// TODO: use registry/typings.json for custom install procedures
class UnInstall extends Base {
  constructor(name) {
    super(name);    
  }

  get location() {
    return this.registry[this.name] || `dt~${this.name}`;
  }

  get commandName() {
    return 'uninstall';
  } 
}

module.exports = function(name) {
  new UnInstall(name).run(res => {
    console.log('done');
  });
}