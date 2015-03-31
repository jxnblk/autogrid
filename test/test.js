
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var autogrid = require('..');
var columnSelector = require('../lib/column-selector');
var cssnext = require('cssnext');
var cssstats = require('cssstats');
var humanize = require('humanize-plus');
var validate = require('css-validator');

var options = require('./options');

var stylesheets = {};
Object.keys(options).forEach(function(key){
  stylesheets[key] = autogrid(options[key]);
});

Object.keys(stylesheets).map(function(key) {
  var css = stylesheets[key];
  var stats = cssstats(css);
  fs.writeFileSync(path.join(__dirname, './visual/' + key + '.css'), css);
  fs.writeFileSync(path.join(__dirname, './visual/' + key + '-stats.json'), JSON.stringify(stats.aggregates, null, 2));
});


describe('autogrid', function() {

  it('should create a string', function() {
    assert.equal(typeof stylesheets.defaults, 'string');
  });

  it('should correctly parse column selector names', function() {
    var selector = columnSelector({ prefix: '', columnName: 'BB-column-NN-MM' }, false, 6, false);
    assert.equal(selector, '.column-6');
    selector = columnSelector({ prefix: '', columnName: 'BB-column-NN--MM' }, false, 6, 'modifier');
    assert.equal(selector, '.column-6--modifier');
    selector = columnSelector({ prefix: '', columnName: 'BB_col-NN--MM' }, 'sm', 6, 'modifier');
    assert.equal(selector, '.sm_col-6--modifier');
  });

  it('should create valid css', function(done) {
    validate({ text: stylesheets.css3 }, function(err, data) {
      if (err) throw err;
      assert.equal(data.validity, true);
      done();
    });
  });

  it('should create valid css for inline-block mode', function(done) {
    validate({ text: stylesheets.suitcss }, function(err, data) {
      if (err) throw err;
      assert.equal(data.validity, true);
      done();
    });
  });

  it('should compile with cssnext', function() {
    assert.doesNotThrow(function() {
      var result = cssnext(stylesheets.defaults);
    });
  });

  it('should be the same as css3', function() {
    var result = cssnext(stylesheets.defaults);
    assert.equal(stylesheets.css3.trim(), result.trim());
  });

});

