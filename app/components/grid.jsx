
var React = require('react');
var classnames = require('classnames');

var columnSelector = require('../../lib/column-selector');

var Grid = React.createClass({

  render: function() {

    var opts = this.props.options;
    var cols = [];
    for (var i = 0; i < opts.columns; i++) {
      cols.push(columnSelector(opts, false, i+1, false).replace(/^\./, ''));
    }
    var classes = {
      container: opts.prefix + opts.containerName,
      row: opts.prefix + opts.rowName,
      col: columnSelector(opts, false, false, false).replace(/^\./, ''),
      cols: cols,
    };
    styles = {
      col: {
        backgroundColor: 'rgba(255,0,0,.125)',
        boxShadow: 'inset 0 0 0 2px rgba(255,0,0,.25)',
      }
    };

    console.log(cols);
    return (
      <div className={classes.container}>
        {'.'+classes.container}
        <div className={classes.row}>
          <div className={classnames(classes.col, cols[5])} style={styles.col}>{cols[5]}</div>
          <div className={classnames(classes.col, cols[5])} style={styles.col}>{cols[5]}</div>
        </div>
      </div>
    )
  }

});

module.exports = Grid;

