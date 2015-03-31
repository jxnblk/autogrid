
var _ = require('lodash');
var postcss = require('postcss');

var defaults = require('./lib/defaults');
var createContainer = require('./lib/container');
var createRow = require('./lib/row');
var createColumns = require('./lib/columns');
var createCustomProperties = require('./lib/custom-properties');
var createCustomMedia = require('./lib/custom-media');
var createOffsets = require('./lib/offsets');
var createColumnFlush = require('./lib/column-flush');


module.exports = function(options) {

  var options = _.clone(options) || {};
  options = _.defaults(options, defaults);

  var root = postcss.root({ after: '\n' });

  root.nodes.push(postcss.parse(options.header));
  root.append(createContainer(options));
  root.append(createRow(options));
  root.append(createColumns(options));
  root.append(createOffsets(options));
  root.append(createColumnFlush(options));
  root.append(createCustomMedia(options));
  root.append(createCustomProperties(options));

  return root.toResult().css;

};

