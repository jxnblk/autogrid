
var postcss = require('postcss');

module.exports = function(options) {

  if (!options.row) {
    return [];
  }

  var rules = [];

  rules.push(
    postcss.rule({
      selector: '.' + options.prefix + options.rowName,
      before: '\n' 
    })
    .append(postcss.decl({
      prop: 'margin-left',
      value: options.customProperties ? '-var(--' + options.prefix + 'gutter-width)' : '-' + options.gutter,
      before: '\n  '
    }))
    .append(postcss.decl({
      prop: 'margin-right',
      value: options.customProperties ? '-var(--' + options.prefix + 'gutter-width)' : '-' + options.gutter,
      before: '\n  '
    }))
  );

  rules.push(
    postcss.rule({
      selectors: [
        '.' + options.prefix + options.rowName + ':before',
        '.' + options.prefix + options.rowName + ':after'
      ],
      before: '\n' 
    })
    .append(postcss.decl({
      prop: 'content', value: '" "', before: '\n  '
    }))
    .append(postcss.decl({
      prop: 'display', value: 'table', before: '\n  '
    }))
  );

  rules.push(
    postcss.rule({
      selector: '.' + options.prefix + options.rowName + ':after',
      before: '\n'
    })
    .append(postcss.decl({
      prop: 'clear', value: 'both', before: '\n  '
    }))
  );

  return rules;

};

