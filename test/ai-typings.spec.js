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

var typings = require('../lib/index.js');

describe('ai-typings module', () => {
    describe('#awesome()', () => {
        it('should return a hello', () => {
            // expect(ai-typings.awesome('livia')).to.equal('hello livia');
        });
    });
});
