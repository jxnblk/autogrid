
var postcss = require('postcss');

module.exports = function(options) {

  var rules = [];

  if (options.offsets) {
    options.breakpoints.forEach(function(breakpoint) {
      var offsetRules = [];
      for (var i = 0; i < options.columns - 1; i++) {
        var selector;
        if (!breakpoint.name) {
          selector = '.' + options.classNames.column.replace(/\-BB|BB\-|BB/, ''); 
        } else {
          selector = '.' + options.classNames.column.replace('BB', breakpoint.name);
        }
        selector = selector.replace(/MM/, 'offset');
        selector = selector.replace(/NN/, i+1);
        offsetRules.push(
          postcss.rule({
            selector: selector
          })
            .append(postcss.decl({
              prop: 'margin-left',
              value: ((i+1) / 12 * 100) + '%'
            }))
        );
        if (!breakpoint.value) {
          rules = rules.concat(offsetRules);
        } else {
          rules.push(
            postcss.atRule({
              name: 'media',
              params: breakpoint.value
            })
            .append(offsetRules)
          )
        }
      }
    });
  }

  return rules;

};

