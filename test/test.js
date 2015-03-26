
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var autogrid = require('..');
var cssnext = require('cssnext');
var cssstats = require('cssstats');
var humanize = require('humanize-plus');

var stylesheets = {
  css4: autogrid(),
  css3: autogrid({
    customMedia: false,
    customProperties: false
  }),
  minimal: autogrid({
    container: false,
    row: false,
    mixedColumns: false,
    breakpoints: [{}],
  }),
  etsy: autogrid({
    gutter: '18px',
    container: false,
    mixedColumns: true,
    offset: true,
    columnFlush: true,
    breakpoints: [
      { name: 'xs' },
      { name: 'sm', value: '(min-width: 480px)' },
      { name: 'md', value: '(min-width: 720px)' },
      { name: 'lg', value: '(min-width: 960px)' },
      { name: 'xl', value: '(min-width: 1200px)' },
      { name: 'tv', value: '(min-width: 1600px)' },
    ],
    columnName: 'col-MM-BB-NN'
  }),
  bootstrap: autogrid({
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
    //prefix: 'bs-',
    containerName: 'container',
    rowName: 'row',
    columnName: 'col-BB-MM-NN',
  }),
  suitcss: autogrid({
    method: 'inline-block',
    container: false,
    rowName: 'Grid',
    columnName: 'Grid-cell-BB-NN',
    gutter: '20px',
  }),
};

Object.keys(stylesheets).map(function(key) {
  var css = stylesheets[key];
  var stats = cssstats(css);
  fs.writeFileSync(path.join(__dirname, './results/' + key + '.css'), css);
  fs.writeFileSync(path.join(__dirname, './results/' + key + '-stats.json'), JSON.stringify(stats.aggregates, null, 2));
});


describe('autogrid', function() {

  it('should create a string', function() {
    assert.equal(typeof stylesheets.css4, 'string');
  });

  it('should compile with cssnext', function() {
    assert.doesNotThrow(function() {
      var result = cssnext(stylesheets.css4);
      //console.log(result);
    });
  });

  it('should be the same as css3', function() {
    var result = cssnext(stylesheets.css4);
    assert.equal(stylesheets.css3.trim(), result.trim());
  });

});
