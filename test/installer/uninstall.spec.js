'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

require('../project-files');

const lib = require('../../lib');

describe('Typings', () => {
  describe('uninstall sortable', () => {
      const success = lib.uninstall('sortable');
      it('should be true', () => {
          expect(success).to.be(true);
      });
  });
});