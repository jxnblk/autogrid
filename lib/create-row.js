
module.exports = function(options) {

  var css = [
    '.' + options.classNames.row + ' {',
    '  margin-left: -' +
      (options.customProperties ? 'var(--gutter-width)' : options.gutter) + ';',
    '  margin-right: -' +
      (options.customProperties ? 'var(--gutter-width)' : options.gutter) + ';',
    '}',
    '.' + options.classNames.row + ':before,',
    '.' + options.classNames.row + ':after {',
    '  content: " ";',
    '  display: table;',
    '}',
    '.' + options.classNames.row + ':after {',
    '  clear:both;',
    '}'
  ].join('\n');

  return css;

};

