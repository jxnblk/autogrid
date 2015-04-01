
var _ = require('lodash');
var pkg = require('../package.json');
var Root = require('./components/root.jsx');

module.exports = {
  props: {
    name: pkg.name,
    title: _.capitalize(pkg.name),
    description: pkg.description,
    npm: '//npmjs.com/package/' + pkg.name,
    version: pkg.version,
    stylesheets: [
      //'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.2.1/bassdock.min.css',
      'app/base.css'
    ],
    javascripts: [ 'app/bundle.js' ],
  },
  Root: Root
};
