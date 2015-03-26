
var postcss = require('postcss');
var columnSelector = require('./column-selector');

module.exports = function(options) {

  var rules = [];

  if (!options.columnFlush) {
    return rules;
  }

  options.breakpoints.forEach(function(breakpoint) {
    var flushRule;
    var flushName = (typeof options.columnFlush === 'string') ? options.columnFlush : 'flush';

    var selector = columnSelector(options, breakpoint.name, false, flushName);

    /*
      if (!breakpoint.name) {
        selector = '.' + options.prefix + options.columnName.replace(/\-BB|BB\-|BB/, ''); 
      } else {
        selector = '.' + options.prefix + options.columnName.replace('BB', breakpoint.name);
      }
      selector = selector.replace(/\-NN|NN\-|NN/, '');
      selector = selector.replace(/MM/, flushName);
    */

    flushRule = postcss.rule({
      selector: selector,
    })
    .append(postcss.decl({
      prop: 'padding-left',
      value: 0
    }))
    .append(postcss.decl({
      prop: 'padding-right',
      value: 0
    }));
    

    if (!breakpoint.value) {
      rules.push(flushRule);
    } else {
      rules.push(
        postcss.atRule({
          name: 'media',
          params: options.customMedia ? '(--' + options.prefix + 'breakpoint-' + breakpoint.name +')' : breakpoint.value
        })
        .append(flushRule)
      );
    }

  });

  return rules;

};

