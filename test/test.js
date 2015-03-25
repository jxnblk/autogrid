
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gridable = require('..');
var cssnext = require('cssnext');

var css4 = gridable();
var css3 = gridable({
  customMedia: false,
  customProperties: false
});

var bootstrap = gridable({
  customMedia: false,
  customProperties: false,
  container: '1170px',
  gutter: '15px',
  offsets: true,
  breakpoints: [
    { name: 'xs' },
    { name: 'sm', value: '(min-width: 768px)' },
    { name: 'md', value: '(min-width: 992px)' },
    { name: 'lg', value: '(min-width: 1200px)' },
  ],
  classNames: {
    container: 'container',
    row: 'row',
    column: 'col-BB-MM-NN'
  }
});

fs.writeFileSync(path.join(__dirname, './results/css3.css'), css3);
fs.writeFileSync(path.join(__dirname, './results/css4.css'), css4);
fs.writeFileSync(path.join(__dirname, './results/bootstrap.css'), bootstrap);

console.log(bootstrap);

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
