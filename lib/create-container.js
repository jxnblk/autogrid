
module.exports = function(options) {

  var css = [
    '.' + options.classNames.container + ' {',
    '  max-width: ' +
      (options.customProperties ? 'var(--container-width)' : options.container) +
      ';',
    '  margin-left: auto;',
    '  margin-right: auto;',
    '}'
  ].join('\n');

  return css;

};

