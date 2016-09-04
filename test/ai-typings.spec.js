/*
 * ai-typings
 * https://github.com/kristianmandrup/ai-typings
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var aiTypings = require('../lib/ai-typings.js');

describe('ai-typings module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(ai-typings.awesome('livia')).to.equal('hello livia');
        });
    });
});
