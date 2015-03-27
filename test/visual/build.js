// Create HTML test pages for in-browser visual testing

var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var defaults = require('../../lib/defaults');
var options = require('../options');
var columnSelector = require('../../lib/column-selector');
var indexTpl = _.template(fs.readFileSync(path.join(__dirname, './index-template.html'), 'utf8'));
var tpl = _.template(fs.readFileSync(path.join(__dirname, './template.html'), 'utf8'));

// tests [
//  { name: 'widths' }
// ]
// classnames:
//   container
//   rowClass
//   column
//   widths

var data = {
  tests: [
    { name: 'widths' },
  ]
};

var index = indexTpl({ options: options });
fs.writeFileSync(path.join(__dirname, './index.html'), index);

Object.keys(options).forEach(function(key) {

  var opts = options[key];
  opts = _.defaults(opts, defaults);

  data.stylesheet = key + '.css';
  data.stats = require('./' + key + '-stats.json');
  data.name = key;
  data.columns = opts.columns;
  data.container = opts.containerName;
  data.row = opts.rowName;
  data.col = columnSelector(opts, false, opts.breakpoints[0].name, false).replace(/^\./,'');
  data.cols = [];
  for (var i = 0; i < opts.columns; i++) {
    data.cols.push( columnSelector(opts, opts.breakpoints[0].name, i+1, false).replace(/^\./,'') );
  }
  var flushName = (typeof opts.columnFlush === 'string') ? opts.columnFlush : 'flush';
  data.colFlush = columnSelector(opts, opts.breakpoints[0].name, false, flushName).replace(/^\./,'');

  var html = tpl(data);

  fs.writeFileSync(path.join(__dirname, './' + key + '.html'), html);

});

