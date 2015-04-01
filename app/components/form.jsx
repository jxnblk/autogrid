
var React = require('react');
var Stepper = require('rebass-stepper');
var NumberRange = require('rebass-number-range');

var Form = React.createClass({

  propTypes: {
    updateOptions: React.PropTypes.func,
    options: React.PropTypes.shape({
      columns: React.PropTypes.number,
      gutter: React.PropTypes.number,
    }),
  },

  handleColumnsChange: function(n) {
    var options = this.props.options;
    options.columns = n;
    this.props.updateOptions(options);
  },

  handleGutterChange: function(n) {
    var options = this.props.options;
    options.gutter = n;
    this.props.updateOptions(options);
  },

  render: function() {
    var handleSubmit = function(e) {
      e.preventDefault();
    };
    var opts = this.props.options;
    return (
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-wrap py2 mxn2">
          <div className="md-col-4 px2">
            <Stepper
              id="columns-input"
              name="columns"
              label="Columns"
              value={opts.columns}
              min={2}
              max={32}
              step={2}
              bar
              onValueChange={this.handleColumnsChange} />
          </div>
          <div className="md-col-4 px2">
            <NumberRange
              id="gutter-input"
              name="gutter"
              label="Gutter"
              value={opts.gutter}
              min={0}
              max={64}
              onValueChange={this.handleGutterChange}
              />
          </div>
        </div>
      </form>
    )
  }

});


module.exports = Form;

