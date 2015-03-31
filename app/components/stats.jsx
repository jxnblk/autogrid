
var React = require('react');
var cssstats = require('cssstats');

var Stats = React.createClass({

  getDefaultProps: function() {
    return {
      css: ''
    }
  },

  render: function() {
    var stats = cssstats(this.props.css);
    return (
      <div className="flex flex-wrap">
        <div>{stats.size} bytes</div>
        <div>{stats.gzipSize} gzipped</div>
        <div>{stats.rules.length} rules</div>
        <div>{stats.aggregates.selectors} selectors</div>
        <div>{stats.aggregates.declarations} declarations</div>
        <div>{stats.aggregates.properties.length} properties</div>
      </div>
    )
  }

});

module.exports = Stats;

