
var postcss = require('postcss');

module.exports = function(options) {


  var rule = postcss.rule({
    selector: '.' + options.classNames.container,
    before: '\n'
  }).append(postcss.decl({
      prop: 'max-width',
      value: options.customProperties ? 'var(--container-width)' : options.container,
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

  return rule;

};

