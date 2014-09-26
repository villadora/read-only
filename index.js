var util = require('util');

function readonly(obj, options) {
  options = options || {};
  options.nested = options.hasOwnProperty('nested') ? options.nested : true;

  var ro = {};

  function defineReadOnlyProperty(target, obj, key) {
    var val = obj[key];
    Object.defineProperty(target, key, {
      value: (function() {
        if (Array.isArray(val)) {
          return val.map(function(v) {
            return typeof v == 'object' ? readonly(v, options) : v;
          });
        }else if (typeof val == 'object') {
          return options.nested ? readonly(val): val;
        } else
          return val;
      })(),
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
