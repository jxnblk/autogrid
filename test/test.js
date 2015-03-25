
var assert = require('assert');
var gridable = require('..');
var cssnext = require('cssnext');

var css4 = gridable();
var css3 = gridable({
  customMedia: false,
  customProperties: false
});

console.log(css4);
//console.log(css3);

describe('gridable', function() {

  it('should create a string', function() {
    assert.equal(typeof css4, 'string');
  });

  it('should compile with cssnext', function() {
    assert.doesNotThrow(function() {
      var result = cssnext(css4);
      //console.log(result);
    });
  });

  it('should be the same as css3', function() {
    var result = cssnext(css4);
    assert.equal(css3.trim(), result.trim());
  });

});
