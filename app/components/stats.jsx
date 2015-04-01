
var React = require('react');
var cssstats = require('cssstats');
var filesize = require('filesize');

var Stats = React.createClass({

  propTypes: {
    css: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      css: ''
    }
  },

  render: function() {
    var stats = cssstats(this.props.css);
    return (
      <div className="h6 bold caps flex flex-wrap py2 mxn2">
        <div className="flex-auto px2">{filesize(stats.size)}</div>
        <div className="flex-auto px2">{filesize(stats.gzipSize)} gzipped</div>
        <div className="flex-auto px2">{stats.rules.length} rules</div>
        <div className="flex-auto px2">{stats.aggregates.selectors} selectors</div>
        <div className="flex-auto px2">{stats.aggregates.declarations} declarations</div>
        <div className="flex-auto px2">{stats.aggregates.properties.length} properties</div>
      </div>
    )
  }

});

module.exports = Stats;

