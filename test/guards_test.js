'use strict';

// dependencies

var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

// test

afterEach(function () {
  rimraf.sync('temp');
});

describe('broccoli-replace', function () {
  it('should replace simple key with value', function (done) {
    var expected = fs.readFileSync('test/fixtures/expected.js', 'utf8');
    var result   = fs.readFileSync('temp/sample.js', 'utf8');
    assert.equal(result, expected);
    done();
  });
});

