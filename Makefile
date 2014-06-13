node_modules: package.json
	npm install

.PHONY: firefox
firefox: node_modules
	./node_modules/.bin/mozilla-download --product firefox --branch nightly --channel prerelease  $@

test: firefox node_modules
	./node_modules/.bin/marionette-mocha $(shell find test -name '*_test.js')

