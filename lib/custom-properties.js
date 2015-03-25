
var postcss = require('postcss');

module.exports = function(options) {

  if (options.customProperties) {

    var rule = postcss.rule({
      selector: ':root',
      before: '\n',
      after: '\n'
    })
    .append(postcss.decl({
      prop: '--container-width',
      value: options.container,
      before: '\n  '
    }))
    .append(postcss.decl({
      prop: '--gutter-width',
      value: options.gutter,
      before: '\n  '
    }));

    return rule;

  } else {
    return [];
  }

};

