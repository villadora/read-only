var util = require('util');

function readonly(obj, options) {
  options = options || {};
  options.nested = options.hasOwnProperty('nested') ? options.nested : true;

  var ro = {};

  function defineReadOnlyProperty(target, obj, key) {
    var val = obj[key];
    Object.defineProperty(target, key, {
      value: typeof val == 'object' ? (options.nested ? readonly(val): val) : val,
      enumerable: true,
      writable: false
    });
  }

  (options.keys || Object.keys(obj)).forEach(function(key) {
    defineReadOnlyProperty(ro, obj, key);
  });


  return ro;
}


module.exports = readonly;
