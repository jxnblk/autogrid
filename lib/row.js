
var postcss = require('postcss');

module.exports = function(options) {

  var rules = [];

  if (!options.row) {
    return rules;
  }

  var selector = '.' + options.prefix + options.rowName;

  rules.push(
    postcss.rule({
      selector: selector,
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

  if (options.method === 'inline-block') {
    rules.push(
      postcss.rule({
        selector: selector,
        before: '\n'
      })
      .append(postcss.decl({
        prop: 'font-size', value: 0
      }))
      .append(postcss.decl({
        prop: 'text-align', value: 'left' 
      }))
    )
  } else {
    rules.push(
      postcss.rule({
        selectors: [
          selector + ':before',
          selector + ':after'
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
        selector: selector + ':after',
        before: '\n'
      })
      .append(postcss.decl({
        prop: 'clear', value: 'both', before: '\n  '
      }))
    );
  }

  return rules;

};

