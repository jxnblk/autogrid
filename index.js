
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
//var optionsTypeCheck = require('./lib/options-type-check');
//
// Bootstrap
// push/pull (left/right) & position: relative


module.exports = function(options) {

  var options = options || {};
  options = _.defaults(options, {
    columns: 12,
    gutter: '32px', // Add support for false
    container: '1024px', // or false
    containerPadding: false, // or true or string 
    row: true,
    customMedia: true,
    customProperties: true,
    breakpoints: [ // Add support for false
      {},
      { name: 'sm', value: '(min-width: 40em)' },
      { name: 'md', value: '(min-width: 52em)' },
      { name: 'lg', value: '(min-width: 64em)' }
    ],
    method: 'float', // Add support for inline-block and flex
    noCollapse: true,
    mixedColumns: false,
    offset: false, // or true or string (for offset name)
    // right: false,
    // center: false,
    // push: false,
    // pull: false,
    prefix: '',
    containerName: 'container',
    rowName: 'row',
    columnName: 'BB-col-NN-MM',
    // Macros support (e.g. bootstrap, suitcss, inuitcss, foundation, etc)
  });

  //if (!optionsTypeCheck(options)) {
  //  return false;
  //};

  var root = postcss.root({ after: '\n' });

  var header = [
    '/*',
    '',
    '  autogrid',
    '  v' + pkg.version,
    '',
    '*/\n'
  ].join('\n');

  root.nodes.push(postcss.parse(header));

  root.append(createContainer(options));
  root.append(createRow(options));
  root.append(createColumns(options));
  root.append(createOffsets(options));
  root.append(createCustomMedia(options));
  root.append(createCustomProperties(options));
  // center extension


  return root.toResult().css;

};

