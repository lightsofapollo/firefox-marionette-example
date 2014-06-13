var assert = require('assert');
marionette("index.html", function() {
  var client = marionette.client();

  /**
  XXX: marionette client is in a blocking mode here so you cannot run
       any non-blocking code here (like a http server) it runs in a child process.

       I would abstract this code somehow to avoid copy/pasting...
  */
  var url;
  var serverProc;
  suiteSetup(function(done) {
    var fork = require('child_process').fork;
    serverProc = fork(__dirname + '/server.js');

    serverProc.on('message', function(event) {
      assert.equal(event[0], 'start');
      assert.ok(event[1]);
      url = event[1];
      done();
    });
  });

  // clean it back up
  suiteTeardown(function(done) {
    serverProc.kill();
    serverProc.once('exit', function() {
      done();
    });
  });

  setup(function() {
    client.goUrl(url + '/index.html');
  });

  test('content of page', function() {
    var tests = client.findElement('#iliketests');
    assert.equal(tests.text(), 'false');
  });
});
