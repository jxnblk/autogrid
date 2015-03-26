
var pkg = require('../package.json');

module.exports = {
  columns: 12,
  gutter: '32px', // Add support for false
  container: '1024px', // or false
  containerPadding: false, // or true or string 
  row: true,
  customMedia: true,
  customProperties: true,
  breakpoints: [ // Add support for false
    {},
    { name: 'sm', value: '(min-width: 40em)' },
    { name: 'md', value: '(min-width: 52em)' },
    { name: 'lg', value: '(min-width: 64em)' }
  ],
  method: 'float', // Add support for inline-block and flex
  fontSize: '1rem', // Used for inline-block method
  noCollapse: true,
  mixedColumns: false,
  offset: false, // or true or string (for offset name)
  columnFlush: false, // Modifier to remove gutter per column
  // right: false,
  // center: false,
  // push: false,
  // pull: false,
  prefix: '',
  containerName: 'container',
  rowName: 'row',
  columnName: 'BB-col-NN-MM',
  header: '/*\n\n  autogrid\n  v' + pkg.version + '\n\n*/\n\n',

  // Macros support (e.g. bootstrap, suitcss, inuitcss, foundation, etc)
};
