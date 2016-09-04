#!/usr/bin/env node

/*
 * ai-typings
 * https://github.com/kristianmandrup/ai-typings
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

const program = require('commander');
 
program
  .version('0.0.1')

require('../lib/programs');

program.parse(process.argv);

