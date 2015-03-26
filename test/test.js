
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var autogrid = require('..');
var cssnext = require('cssnext');

var css4 = autogrid();
var css3 = autogrid({
  customMedia: false,
  customProperties: false
});

var minimal = autogrid({
  container: false,
  row: false,
  mixedColumns: false,
  breakpoints: [{}],
});

var bootstrap = autogrid({
  customMedia: false,
  customProperties: false,
  container: '1170px',
  containerPadding: true,
  gutter: '15px',
  offset: 'offset',
  mixedColumns: true,
  breakpoints: [
    { name: 'xs' },
    { name: 'sm', value: '(min-width: 768px)' },
    { name: 'md', value: '(min-width: 992px)' },
    { name: 'lg', value: '(min-width: 1200px)' },
  ],
  containerName: 'container',
  rowName: 'row',
  columnName: 'col-BB-MM-NN',
});

fs.writeFileSync(path.join(__dirname, './results/css3.css'), css3);
fs.writeFileSync(path.join(__dirname, './results/css4.css'), css4);
fs.writeFileSync(path.join(__dirname, './results/minimal.css'), minimal);
fs.writeFileSync(path.join(__dirname, './results/bootstrap.css'), bootstrap);

console.log(bootstrap);

describe('autogrid', function() {

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
