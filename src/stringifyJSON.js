// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // input - any value
  // JSON.stringify output of value

  var result = [];

  if (obj === null) {
    return '' + obj + '';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return '' + obj + '';
  }

  if (typeof obj === 'boolean') {
    return '' + obj + '';
  }

  // If obj is array, then
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }

  if (!Array.isArray(obj) && typeof obj === 'object') {
    // loop through each key value pair and stringify all keys
    var stringedObj = '';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        stringedObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    // recurse for each value of key
    stringedObj = stringedObj.substring(0, stringedObj.length - 1);
    return '{' + stringedObj + '}';
  }
  // iterate through each value and push into result
  // then we recurseif !Array.isArray && typeof === object
};