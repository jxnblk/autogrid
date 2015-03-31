
var React = require('react');
var autogrid = require('../..');
var Form = require('./form.jsx');
var Stats = require('./stats.jsx');

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
        customMedia: false,
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
      container: options.container,
      columns: options.columns,
      gutter: options.gutter,
      method: options.method,
      columnName: options.columnName,
    };
    var css = autogrid(opts);
    return (
      <div className="flex-auto">
        <Form options={opts}
          updateOptions={this.updateOptions} />
        <Stats css={css} />
        <pre style={{maxHeight:'40vh'}}>{css}</pre>
      </div>
    )
  }

});

module.exports = Autogrid;

