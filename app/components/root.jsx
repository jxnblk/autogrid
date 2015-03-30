
var React = require('react');
var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <Html {...this.props}>
        <div className="px2">
          <Header {...this.props} />
          <Footer {...this.props} />
        </div>
      </Html>
    )
  }
});

module.exports = Root;

