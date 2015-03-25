
module.exports = function(options) {

  if (options.customProperties) {
    var css = [
      ':root {',
      '  --container-width: ' + options.container + ';',
      '  --gutter-width: ' + options.gutter + ';',
      '}'
    ].join('\n');
    return css;
  } else {
    return '';
  }

};

