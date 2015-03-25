
var postcss = require('postcss');

module.exports = function(options) {

  if (options.customMedia) {

    var atRules = options.breakpoints.map(function(breakpoint) {
      return postcss.atRule({
        name: 'custom-media',
        params: [
          '--breakpoint-' +
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

