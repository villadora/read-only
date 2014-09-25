/* global describe, it */

var assert = require('chai').assert;
var readonly = require('../');


describe('readonly', function() {
  it('wrap', function() {
    var ro  = readonly({
      a: 1, 
      b: {
        c: 'h'
      }
    });
    
    ro.a = 2;
    assert.equal(ro.a, 1);
    
    var b = ro.b;
    b.c = 'a';
    assert.equal(b.c, 'h');
  });
});
