var test = require('tap').test
var helloWorld = require('../hello_world.js')

test('hello_world', 
      function (t) {

            t.equal(typeof(helloWorld), "string");

            t.equal(t.length, 10);

            t.equal(helloWorld, "hello world");

            t.equal(helloWorld.substr(3,8), "lo wo")

            t.end();
      }
)
