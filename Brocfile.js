'use strict';

var guards = require('./index');

module.exports = guards('test/fixtures', {
  files: [
    'sample.js'
  ]
});

