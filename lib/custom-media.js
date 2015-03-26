
var postcss = require('postcss');

module.exports = function(options) {

  if (options.customMedia) {

    var atRules = options.breakpoints.map(function(breakpoint) {
      if (!breakpoint.name || !breakpoint.value) {
        return postcss.parse('');
      }
      return postcss.atRule({
        name: 'custom-media',
        params: [
          '--' + options.prefix + 'breakpoint-' +
          breakpoint.name + ' ' +
          breakpoint.value
        ]
      })
    });

    return atRules;

  } else {
    return [];
  }

};

