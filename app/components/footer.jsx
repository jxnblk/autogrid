
var React = require('react');

var Footer = React.createClass({

  getDefaultProps: function() {
    return {
      title: '',
      version: 0,
      homepage: '',
      npm: '',
    }
  },

  render: function() {
    return (
      <footer className="border-top">
        <div className="flex flex-baseline py2 mxn1">
          <a href="//jxnblk.com/autogrid"
            className="ml1 mr1 button button-small button-link">
            {this.props.title}
          </a>
          <div className="h5 ml1 mr1">v{this.props.version}</div>
          <div className="flex-auto px1" />
          <a href={this.props.homepage} className="ml1 mr1 button button-small button-link">Github</a>
          <a href={this.props.npm} className="ml1 mr1 button button-small button-link">NPM</a>
        </div>
      </footer>
    )
  }

});

module.exports = Footer;

