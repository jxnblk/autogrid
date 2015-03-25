
module.exports = function(options) {

  if (options.customMedia) {
    var css = '';
    css = options.breakpoints.map(function(breakpoint) {
      return [
        '@custom-media --breakpoint-',
        breakpoint.name + ' ',
        breakpoint.value + ';',
      ].join('');
    });
    return css.join('\n');
  } else {
    return '';
  }

};

