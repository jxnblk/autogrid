
var _ = require('lodash');
var postcss = require('postcss');
var pkg = require('./package.json');

var createContainer = require('./lib/container');
var createRow = require('./lib/row');
var createColumns = require('./lib/columns');
var createCustomProperties = require('./lib/custom-properties');
var createCustomMedia = require('./lib/custom-media');
var createOffsets = require('./lib/offsets');
//var createColumnRights = require('./lib/column-rights');
//
// Bootstrap
// push/pull (left/right)
// position: relative
// min-height: 1px


module.exports = function(options) {

  var options = options || {};
  options = _.defaults(options, {
    columns: 12,
    gutter: '32px',
    container: '1024px',
    customMedia: true,
    customProperties: true,
    breakpoints: [
      {},
      { name: 'sm', value: '(min-width: 40em)' },
      { name: 'md', value: '(min-width: 52em)' },
      { name: 'lg', value: '(min-width: 64em)' }
    ],
    method: 'float',
    combinedColumns: true,
    offsets: false,
    //modifiers: {
    //  right: false,
    //  center: false,
    //},
    classNames: {
      container: 'container',
      row: 'row',
      column: 'BB-col-NN-MM',
    }
  });

  var root = postcss.root({ after: '\n' });

  var header = [
    '/*',
    '',
    '  Gridable',
    '  v' + pkg.version,
    '',
    '*/\n'
  ].join('\n');

  root.nodes.push(postcss.parse(header));

  root.append(createContainer(options));
  root.append(createRow(options));
  root.append(createCustomMedia(options));
  root.append(createCustomProperties(options));
  root.append(createColumns(options));
  root.append(createOffsets(options));
  // offsets
  // center extension


  return root.toResult().css;

};

