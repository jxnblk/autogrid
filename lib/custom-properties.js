
var postcss = require('postcss');

module.exports = function(options) {

  if (options.customProperties) {

    var rule = postcss.rule({
      selector: ':root',
      before: '\n',
      after: '\n'
    })
    .append(postcss.decl({
      prop: '--' + options.prefix + 'container-width',
      value: options.container,
      before: '\n  '
    }))
    .append(postcss.decl({
      prop: '--' + options.prefix + 'gutter-width',
      value: options.gutter,
      before: '\n  '
    }));

    return rule;

  } else {
    return [];
  }

};

