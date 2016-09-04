const mock = require('mock-fs');
const configs = require('./configs');

mock({
  './installer.json': configs.project,
  './aurelia_project': {
      '/aurelia.json': configs.aurelia,
  },
  'src/component/contact': {
    'install.json': configs.components.contact 
  }
});