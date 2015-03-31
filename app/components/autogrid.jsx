
var React = require('react');
var autogrid = require('../..');
var Form = require('./form.jsx');

var Autogrid = React.createClass({

  getDefaultProps: function() {
    return {
    }
  },

  getInitialState: function() {
    return {
      options: {
        columns: 12,
        gutter: '16px',
        container: '1024px',
        row: true,
        customProperties: false,
        breakpoints: [
        ],
        method: 'float',
        offset: false,
        prefix: '',
        containerName: 'container',
        columnName: 'BB-col-NN-MM',
      }
    }
  },

  updateOptions: function(options) {
    console.log('updateOptions');
    this.setState({ options: options });
  },

  render: function() {
    var options = this.state.options;
    var opts = {
      columns: options.columns,
      gutter: options.gutter,
      customProperties: options.customProperties,
      customMedia: options.customMedia,
    };
    var css = autogrid(opts);
    return (
      <div className="flex-auto">
        <Form options={opts}
          updateOptions={this.updateOptions} />
        <pre>{css}</pre>
      </div>
    )
  }

});

module.exports = Autogrid;

