# ai-typings
# https://github.com/kristianmandrup/ai-typings
#
# Copyright (c) 2016, Kristian Mandrup
# Licensed under the MIT license.

test:

	@NODE_ENV=test ./node_modules/mocha/bin/mocha -t 8000

.PHONY: test