'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

require('../../project-files');

const lib = require('../../lib');

describe('Typings', () => {
  describe('install sortable', () => {
      const success = lib.install('sortable');
      it('should be true', () => {
          expect(success).to.be(true);
      });
  });
});