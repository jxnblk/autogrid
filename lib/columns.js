
var postcss = require('postcss');

module.exports = function(options) {

  var rules = [];
  var breakpoints = options.breakpoints;
  //breakpoints = breakpoints.concat(options.breakpoints);

  if (options.combinedColumns) {
    var allSelectors = [];
    breakpoints.forEach(function(breakpoint) {
      allSelectors = allSelectors.concat(combineSelectors(breakpoint));
    });

    rules.push(postcss.rule({
        selectors: allSelectors
      })
        .append(postcss.decl({
          prop: 'box-sizing',
          value: 'border-box',
        }))
        .append(postcss.decl({
          prop: 'padding-left',
          value: options.customProperties ? 'var(--gutter-width)' : options.gutter,
        }))
        .append(postcss.decl({
          prop: 'padding-right',
          value: options.customProperties ? 'var(--gutter-width)' : options.gutter,
        }))
    );

    breakpoints.forEach(function(breakpoint) {
      var selectors = combineSelectors(breakpoint);
      if (!breakpoint.value) {
        rules.push(postcss.rule({
            selectors: selectors
          })
            .append(postcss.decl({
              prop: 'float',
              value: 'left'
            }))
        );
      } else {
        rules.push(postcss.atRule({
            name: 'media',
            params: options.customMedia ? '(--breakpoint-' + breakpoint.name + ')' : breakpoint.value,
          })
            .append(postcss.rule({
              selectors: selectors
            }))
            .append(postcss.decl({
              prop: 'float',
              value: 'left'
            }))
        );
      }
    });
  } else {
    // Create basic column float styles
  }

  breakpoints.forEach(function(breakpoint) {
    createWidthRules(breakpoint);
  });

  function createWidthRules(breakpoint) {
    var widthRules = [];
      for (var i = 0; i < options.columns; i++) {
        var selector;
        if (!breakpoint.name) {
          selector = '.' + options.classNames.column.replace(/\-BB|BB\-|BB/, ''); 
        } else {
          selector = '.' + options.classNames.column.replace('BB', breakpoint.name);
        }
        selector = selector.replace(/\-MM|MM\-|MM/, ''); 
        selector = selector.replace('NN', i+1);
        widthRules.push(
          postcss.rule({
            selector: selector
          })
          .append(postcss.decl({
            prop: 'width',
            value: ((i+1) / 12 * 100) + '%'
          }))
        );
      }
    if (!breakpoint.value) {
      rules = rules.concat(widthRules);
    } else {
      rules.push(
        postcss.atRule({
          name: 'media',
          params: options.customMedia ? '(--breakpoint-' + breakpoint.name + ')' : breakpoint.value,
        })
        .append(widthRules)
      );
    }
  }

  function combineSelectors(breakpoint) {
    var selectors = [];
    for (var i = 0; i < options.columns; i++) {
      var selector = '.' + options.classNames.column.replace('NN', i+1);
      if (breakpoint.name) {
        selector = selector.replace('BB', breakpoint.name);
      } else {
        selector = selector.replace(/\-BB|BB\-|BB/, '');
      }
      selector = selector.replace(/\-MM|MM\-|MM/, '');
      selectors.push(selector);
    }
    return selectors;
  }

  return rules;

};

