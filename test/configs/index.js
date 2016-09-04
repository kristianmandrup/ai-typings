const readFile = require('./readFile');

module.exports = {
  project: readFile('./installer.json'),
  aurelia: readFile('./aurelia.json'),
  components: require('./components')
}