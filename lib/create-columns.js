
module.exports = function(options) {

  var css = [];
  var breakpoints = [];

  function createBreakpointColumns(breakpoint) {
    var breakpointCss = [];
    var classNames = [];
    var sharedSelectors;
    var shared = [];
    for (var i = 0; i < options.columns; i++) {
      var className = options.classNames.column.replace('NN', i + 1);
      if (breakpoint.name) {
        className = className.replace('BB', breakpoint.name);
      } else {
        className = className.replace(/(\-BB|BB\-)/, '');
      }
      classNames.push(className);
    }
    sharedSelectors = classNames.map(function(className) {
      return '.' + className;
    }).join();
    shared = [
      sharedSelectors + ' {',
      '  float: left;',
      '  box-sizing: border-box;',
      // keep for all breakpoints:
      '  padding-left: ' +
        (options.customProperties ? 'var(--gutter-width)' : options.gutter) + ';',
      '  padding-right: ' +
        (options.customProperties ? 'var(--gutter-width)' : options.gutter) + ';',
      '}'
    ].join('\n');
    breakpointCss.push(shared);
    for (var i = 0; i < options.columns; i++) {
      var className = options.classNames.column.replace('NN', i + 1);
      className = className.replace('BB-', '');
      breakpointCss.push([
        '.' + className + ' {',
        '  width: ' + ((i+1) / 12 * 100) + '%;',
        '}'
      ].join('\n'));
    }
    return breakpointCss.join('\n');
  }

  css.push(createBreakpointColumns({}));

  return css.join('\n\n');;

};

