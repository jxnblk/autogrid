
var assert = require('assert');
var gridable = require('..');
var cssnext = require('cssnext');

var css = gridable();

console.log(css);

describe('gridable', function() {

  it('should create a string', function() {
    assert.equal(typeof css, 'string');
  });

  it('should compile with cssnext', function() {
    assert.doesNotThrow(function() {
      var result = cssnext(css);
      //console.log(result);
    });
  });

});
