
var React = require('react');

var columnSelector = require('../../lib/column-selector');

var Grid = React.createClass({

  render: function() {

    var opts = this.props.options;
    var classes = {
      container: opts.prefix + opts.containerName,
      row: opts.prefix + opts.rowName,
    };

    return (
      <div className={classes.container}>
        {'.'+classes.container}
        <div className={classes.row}>
          {'.'+classes.row}
        </div>
      </div>
    )
  }

});

module.exports = Grid;

