
var fs = require('fs');
var path = require('path');
var build = require('static-react').build;
var options = require('./config'); // Custom app config
var html = build(options); // Returns static HTML
fs.writeFileSync(path.join(__dirname, '../index.html'), html); // Write file to disk

