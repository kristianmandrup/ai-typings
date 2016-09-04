const fs = require('fs');
const path = require('path');

function filePath(relPath) {
  return path.join(__dirname, relPath);
}

module.exports = function (relPath) {
  return fs.readFileSync(filePath(relPath), 'utf8');
}
