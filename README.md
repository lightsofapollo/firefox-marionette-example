# Firefox + Marionette + Node Example

TDLR: run `make test`

## Structure

  - Makefile: contains bootstrapping code to download firefox and npm
              modules

  - test/ : where your tests should go suffixed with `_test.js`

  - test/server : http server wrapper (so you can test stuff in this
                  folder)

  - marionette-mocha.opts : default flags passed to marionette-mocha

  - mocha.opts : default flags passed to mocha

  - firefox : downloaded by the firefox make target this is the binary
              used to run your tests.


## Other Notes:

This uses an updated version of the firefox host that has not yet
landed.

You can also try using the b2g desktop host but you _must_ add a `b2g`
target which will download the correct b2g-desktop binary.
