# read-only [![NPM version](https://badge.fury.io/js/read-only.svg)](http://badge.fury.io/js/read-only) [![Build Status](https://travis-ci.org/villadora/read-only.svg?branch=master)](https://travis-ci.org/villadora/read-only) 

Wrap an normal object to a read-only object, the same as its properties;

## Install

```bash
$ npm install read-only --save
```

## Usage

```js
var readonly = require('read-only');

var ro = readonly({a: 1, b: { c: 'h'}});

ro.a = 2;  // no change
consoe.log(ro.a); // 1

(function() {
   "use strict";
   ro.a = 2; // exception
})();


var b = ro.b;
b.c = 'r'; // no change

```

## Licence

MIT

