
var React = require('react');
var autogrid = require('../..');
var Form = require('./form.jsx');
var Stats = require('./stats.jsx');
var Grid = require('./grid.jsx');

var Autogrid = React.createClass({

  getDefaultProps: function() {
    return {
    }
  },

  getInitialState: function() {
    return {
      options: {
        unit: 'px',
        columns: 12,
        gutter: 16, // convert to px
        container: 1024, // convert to px
        row: true,
        breakpoints: [
        ],
        method: 'float',
        offset: false,
        prefix: '',
        containerName: 'container',
        rowName: 'row',
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
    var autogridOpts = {
      container: opts.container + 'px',
      gutter: opts.gutter + 'px',
      columns: opts.columns,
      method: opts.method,
      customMedia: false,
      customProperties: false,
      breakpoints: [{}],
    };
    var css = autogrid(autogridOpts);
    return (
      <div className="flex-auto">
        <Grid {...this.state} />
        <Stats css={css} />
        <Form options={opts}
          updateOptions={this.updateOptions} />
        <pre style={{maxHeight:'40vh'}}>{css}</pre>
      </div>
    )
  }

});

module.exports = Autogrid;

