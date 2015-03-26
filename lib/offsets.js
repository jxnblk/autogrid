
var postcss = require('postcss');
var columnSelector = require('./column-selector');

module.exports = function(options) {

  var rules = [];

  if (!options.offset) {
    return rules;
  }

  options.breakpoints.forEach(function(breakpoint) {
    var offsetRules = [];
    var offsetName = (typeof options.offset === 'string') ? options.offset : 'offset';
    for (var i = 0; i < options.columns - 1; i++) {
      var selector = columnSelector(options, breakpoint.name, i+1, offsetName);
      offsetRules.push(
        postcss.rule({
          selector: selector
        })
          .append(postcss.decl({
            prop: 'margin-left',
            value: ((i+1) / 12 * 100) + '%'
          }))
      );
    }
    if (!breakpoint.value) {
      rules = rules.concat(offsetRules);
    } else {
      rules.push(
        postcss.atRule({
          name: 'media',
          params: options.customMedia ? '(--' + options.prefix + 'breakpoint-' + breakpoint.name +')' : breakpoint.value
        })
        .append(offsetRules)
      )
    }
  });

  return rules;

};

