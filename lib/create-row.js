
var postcss = require('postcss');

module.exports = function(options) {

  var rules = [];

  rules.push(
    postcss.rule({
      selector: '.' + options.classNames.row,
      before: '\n' 
    })
    .append(postcss.decl({
      prop: 'margin-left',
      value: options.customProperties ? '-var(--gutter-width)' : '-' + options.gutter,
      before: '\n  '
    }))
    .append(postcss.decl({
      prop: 'margin-right',
      value: options.customProperties ? '-var(--gutter-width)' : '-' + options.gutter,
      before: '\n  '
    }))
  );

  rules.push(
    postcss.rule({
      selectors: [
        '.' + options.classNames.row + ':before',
        '.' + options.classNames.row + ':after'
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
      selector: '.' + options.classNames.row + ':after',
      before: '\n'
    })
    .append(postcss.decl({
      prop: 'clear', value: 'both', before: '\n  '
    }))
  );

  return rules;

};

