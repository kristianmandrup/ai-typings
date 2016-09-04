// implement procedure to download and install typings for some vendor libs
const Base = require('./base');

// TODO: use registry/typings.json for custom install procedures
class Install extends Base {
  constructor(name) {
    super(name);    
  }

  get location() {
    return this.registry[this.name] || `dt~${this.name}`;
  }

  get commandName() {
    return 'install';
  } 
}

module.exports = function(name) {
  new Install(name).run(res => {
    console.log('done');
  });
}