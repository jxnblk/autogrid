
var React = require('react');

var Header = React.createClass({

  getDefaultProps: function() {
    return {
      title: '',
      description: '',
      version: 0,
      homepage: '',
      npm: '',
    }
  },

  render: function() {
    return (
      <header className="border-bottom">
        <div className="flex flex-center py2 mxn1">
          <div className="flex-auto px1">
            <h1 className="m0">{this.props.title}</h1>
            <p className="m0">{this.props.description}</p>
          </div>
          <a href={this.props.homepage} className="ml1 mr1 button button-small button-link">Github</a>
          <a href={this.props.npm} className="ml1 mr1 button button-small button-link">NPM</a>
        </div>
      </header>
    )
  }

});

module.exports = Header;

