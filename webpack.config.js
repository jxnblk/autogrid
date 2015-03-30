
module.exports = {
  entry: './app/entry.js',
  output: {
    path: __dirname + '/app/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  }
};
