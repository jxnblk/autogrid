
var postcss = require('postcss');

module.exports = function(options) {

  if (!options.container) {
    return [];
  };

  var rule = postcss.rule({
    selector: '.' + options.prefix + options.containerName,
    before: '\n'
  }).append(postcss.decl({
      prop: 'max-width',
      value: options.customProperties ? 'var(--' + options.prefix + 'container-width)' : options.container,
      before: '\n  '
    })).append(postcss.decl({
      prop: 'margin-left',
      value: 'auto',
      before: '\n  '
    })).append(postcss.decl({
      prop: 'margin-right',
      value: 'auto',
      before: '\n  '
    }));

  if (options.containerPadding) {
    var padding = (typeof options.containerPadding === 'string') ? options.containerPadding : options.gutter;
    rule.append(postcss.decl({
      prop: 'padding-left',
      value: padding
    }))
    .append(postcss.decl({
      prop: 'padding-right',
      value: padding
    }));
  }

  return rule;

};

