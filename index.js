
var _ = require('lodash');
var postcss = require('postcss');
var pkg = require('./package.json');

var createContainer = require('./lib/create-container');
var createRow = require('./lib/create-row');
var createColumns = require('./lib/create-columns');
var createCustomProperties = require('./lib/create-custom-properties');
var createCustomMedia = require('./lib/create-custom-media');
//var createOffsets = require('./lib/create-offsets');
//var createColumnRights = require('./lib/create-column-rights');


module.exports = function(options) {

  var options = options || {};
  options = _.defaults(options, {
    columns: 12,
    gutter: '32px',
    container: '1024px',
    customMedia: true,
    customProperties: true,
    breakpoints: [
      { name: 'sm', value: '(min-width: 40em)' },
      { name: 'md', value: '(min-width: 52em)' },
      { name: 'lg', value: '(min-width: 64em)' }
    ],
    method: 'float',
    combinedColumns: true,
    modifiers: {
      offset: false,
      right: false,
      center: false,
    },
    classNames: {
      container: 'container',
      row: 'row',
      column: 'BB-col-NN',
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

  //var css = [
  //  createColumns(options),
  //].join('\n\n');

  return root.toResult().css;

};

