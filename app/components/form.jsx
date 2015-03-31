
var React = require('react');

var Form = React.createClass({

  renderInput: function(item, i) {
    var self = this;
    function handleChange(e) {
      console.log('handleChange');
      var options = self.props.options;
      var value = e.target.value;
      options[item.key] = value;
      self.props.updateOptions(options);
    }
    return (
      <div key={'input-'+item.key}
        className="sm-col-6 md-col-4 lg-col-3 px2 mb2">
        <label className="h5 bold">{item.key}</label>
        <input type={item.type}
          value={item.value}
          onChange={handleChange}
          className="block full-width field-light" />
      </div>
    )
  },

  render: function() {
    var self = this;
    var inputs = Object.keys(this.props.options).map(function(key) {
      return {
        key: key,
        value: self.props.options[key],
        type: 'text',
      }
    });
    console.log(inputs);
    return (
      <form className="flex flex-wrap mxn2">
        {inputs.map(this.renderInput)}
      </form>
    )
  }

});


module.exports = Form;

