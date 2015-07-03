# broccoli-es7-decorator-jshint-guards [![Build Status](https://secure.travis-ci.org/machty/broccoli-es7-decorator-jshint-guards.png?branch=master)](http://travis-ci.org/machty/broccoli-es7-decorator-jshint-guards)

Wraps your ES7 decorators in jshint guards so that jshint doesn't
complain about new syntax it doesn't (yet) understand.

## Install

From NPM:

```shell
npm install broccoli-es7-decorator-jshint-guards --save-dev
```

## Broccoli Filter

Assuming installation via NPM, you can use `broccoli-es7-decorator-jshint-guards` in your Brocfile.js like this:

```javascript
var decoratorGuards = require('broccoli-es7-decorator-jshint-guards');
module.exports = decoratorGuards('src', {
  files: [
    '**/*.js'
  ]
});
```

The `files` option is passed directly to
[broccoli-replace](https://github.com/outaTiME/broccoli-replace), so
check those docs for other patterns.


