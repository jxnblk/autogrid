
var _ = require('lodash');
var pkg = require('./package.json');

var createContainer = require('./lib/create-container');
var createRow = require('./lib/create-row');
var createColumns = require('./lib/create-columns');
var createCustomProperties = require('./lib/create-custom-properties');
var createCustomMedia = require('./lib/create-custom-media');

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

  function createOffsets() { }
  function createColumnRights() { }
  function createCustomMedia() { }


  var header = [
    '/*',
    '',
    '  Gridable',
    '  v' + pkg.version,
    '',
    '*/'
  ].join('\n');

  var css = [
    header,
    createContainer(options),
    createRow(options),
    createColumns(options),
    createCustomProperties(options),
    createCustomMedia(options),
  ].join('\n\n');

  return css;

};

