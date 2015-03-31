
var React = require('react');
var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Autogrid = require('./autogrid.jsx');

var Root = React.createClass({

  render: function() {
    var init = {
      __html: "window.INITIAL_PROPS = " + JSON.stringify(this.props) + ";\n"
    };
    return (
      <Html {...this.props}>
        <div className="flex flex-column px2"
          style={{ minHeight: '100vh' }}>
          <Header {...this.props} />
          <Autogrid />
          <Footer {...this.props} />
          <script dangerouslySetInnerHTML={init} />
        </div>
      </Html>
    )
  }
});

module.exports = Root;

