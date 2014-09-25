REPORTER = spec

test:
		@./node_modules/.bin/mocha \
			--reporter $(REPORTER) \
			./test/read-only.js

.PHONY: test