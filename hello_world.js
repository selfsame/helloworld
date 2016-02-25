var wrappy = require('wrappy')
var hello = require('hello.js')
var world = require('world.js')

module.exports = wrappy(helloWorld)

helloWorld = [hello, " ", world].join("");