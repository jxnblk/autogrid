
module.exports = {
  defaults: {},
  css3: {
    customMedia: false,
    customProperties: false
  },
  minimal: {
    container: false,
    row: false,
    breakpoints: [{}],
    customMedia: false,
    customProperties: false
  },
  etsy: {
    gutter: '18px',
    container: false,
    mixedColumns: true,
    offset: true,
    columnFlush: true,
    breakpoints: [
      { name: 'xs' },
      { name: 'sm', value: '(min-width: 480px)' },
      { name: 'md', value: '(min-width: 720px)' },
      { name: 'lg', value: '(min-width: 960px)' },
      { name: 'xl', value: '(min-width: 1200px)' },
      { name: 'tv', value: '(min-width: 1600px)' },
    ],
    columnName: 'col-MM-BB-NN',
    customMedia: false,
    customProperties: false
  },
  bootstrap: {
    customMedia: false,
    customProperties: false,
    container: '1170px',
    containerPadding: true,
    gutter: '15px',
    offset: 'offset',
    mixedColumns: true,
    breakpoints: [
      { name: 'xs' },
      { name: 'sm', value: '(min-width: 768px)' },
      { name: 'md', value: '(min-width: 992px)' },
      { name: 'lg', value: '(min-width: 1200px)' },
    ],
    containerName: 'container',
    rowName: 'row',
    columnName: 'col-BB-MM-NN',
  },
  suitcss: {
    method: 'inline-block',
    container: false,
    rowName: 'Grid',
    columnName: 'Grid-cell-BB-NN',
    gutter: '20px',
    customMedia: false,
    customProperties: false
  },
};
