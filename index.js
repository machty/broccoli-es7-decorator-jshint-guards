'use strict';

var replace = require('broccoli-replace');

function makeGuardFilter(inputTree, options) {
  return replace(inputTree, {
    files: options.files,
    patterns: [{
      match: /^ *@\w+.*$/mg,
      replacement: function(annotationLine) {
        return "/* jshint ignore:start */\n" + annotationLine + "\n/* jshint ignore:end */";
      }
    }],
    usePrefix: false,
  });
}

module.exports = makeGuardFilter;

