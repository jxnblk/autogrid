
var postcss = require('postcss');
var columnSelector = require('./column-selector');

module.exports = function(options) {

  var rules = [];
  var breakpoints = options.breakpoints;

  function floatDeclaration() {
    return postcss.decl({
      prop: 'float',
      value: 'left'
    });
  }

  // Based on suitcss grid
  function inlineBlockDeclarations() {
    var declarations = [];
    declarations.push(
      postcss.decl({ prop: 'display', value: 'inline-block' })
    );
    declarations.push(
      postcss.decl({ prop: 'font-size', value: options.fontSize })
    );
    declarations.push(
      postcss.decl({ prop: 'margin', value: '0' })
    );
    declarations.push(
      postcss.decl({ prop: 'padding', value: '0' })
    );
    declarations.push(
      postcss.decl({ prop: 'text-align', value: 'left' })
    );
    declarations.push(
      postcss.decl({ prop: 'vertical-align', value: 'top' })
    );
    declarations.push(
      postcss.decl({ prop: 'width', value: '100%' })
    );
    return declarations;   
  }

  var columnDeclarations;
  if (options.method === 'inline-block') {
    columnDeclarations = inlineBlockDeclarations();
  } else {
    columnDeclarations = floatDeclaration();
  }

  if (options.mixedColumns) {
    var allSelectors = [];
    breakpoints.forEach(function(breakpoint) {
      allSelectors = allSelectors.concat(combineSelectors(breakpoint));
    });

    var rule = postcss.rule({
        selectors: allSelectors
      })
        .append(postcss.decl({
          prop: 'box-sizing',
          value: 'border-box',
        }))
        .append(postcss.decl({
          prop: 'padding-left',
          value: options.customProperties ? 'var(--' + options.prefix + 'gutter-width)' : options.gutter,
        }))
        .append(postcss.decl({
          prop: 'padding-right',
          value: options.customProperties ? 'var(--' + options.prefix + 'gutter-width)' : options.gutter,
        }));
    if (options.noCollapse) {
      rule.append(postcss.decl({
        prop: 'min-height',
        value: '1px'
      }));
    }
    rules.push(rule);

    breakpoints.forEach(function(breakpoint) {
      var selectors = combineSelectors(breakpoint);
      if (!breakpoint.value) {
        rules.push(postcss.rule({
            selectors: selectors
          })
            .append(
              columnDeclarations
              //postcss.decl({ prop: 'float', value: 'left' })
            )
        );
      } else {
        rules.push(postcss.atRule({
            name: 'media',
            params: options.customMedia ? '(--' + options.prefix + 'breakpoint-' + breakpoint.name + ')' : breakpoint.value,
          })
            .append(postcss.rule({
              selectors: selectors
            })
              .append(postcss.decl({
                prop: 'float',
                value: 'left'
              }))
            )
        );
      }
    });
  } else {
    // Create basic column float styles
    breakpoints.forEach(function(breakpoint) {
      var colRule;
      var selector = columnSelector(options, breakpoint.name, false, false);
      colRule = postcss.rule({
          selector: selector
        })
          .append(
            columnDeclarations
          )
          .append(postcss.decl({
            prop: 'box-sizing',
            value: 'border-box',
          }))
          .append(postcss.decl({
            prop: 'padding-left',
            value: options.customProperties ? 'var(--' + options.prefix + 'gutter-width)' : options.gutter,
          }))
          .append(postcss.decl({
            prop: 'padding-right',
            value: options.customProperties ? 'var(--' + options.prefix + 'gutter-width)' : options.gutter,
          }));
      if (options.noCollapse) {
        colRule.append(postcss.decl({
          prop: 'min-height',
          value: '1px'
        }));
      }
      if (!breakpoint.value) {
        rules.push(colRule);
      } else {
        rules.push(
          postcss.atRule({
            name: 'media',
            params: options.customMedia ? '(--' + options.prefix + 'breakpoint-' + breakpoint.name + ')' : breakpoint.value,
          })
          .append(colRule)
        );
      }
    });
  }

  breakpoints.forEach(function(breakpoint) {
    createWidthRules(breakpoint);
  });

  function createWidthRules(breakpoint) {
    var widthRules = [];
      for (var i = 0; i < options.columns; i++) {
        var selector = columnSelector(options, breakpoint.name, i+1, false);
        widthRules.push(
          postcss.rule({
            selector: selector,
            after: ' ',
          })
          .append(postcss.decl({
            before: ' ',
            prop: 'width',
            value: ((i+1) / options.columns * 100) + '%'
          }))
        );
      }
    if (!breakpoint.value) {
      rules = rules.concat(widthRules);
    } else {
      rules.push(
        postcss.atRule({
          name: 'media',
          params: options.customMedia ? '(--' + options.prefix + 'breakpoint-' + breakpoint.name + ')' : breakpoint.value,
        })
        .append(widthRules)
      );
    }
  }

  function combineSelectors(breakpoint) {
    var selectors = [];
    for (var i = 0; i < options.columns; i++) {
      var selector = columnSelector(options, breakpoint.name, i+1, false);
      selectors.push(selector);
    }
    return selectors;
  }

  return rules;

};

