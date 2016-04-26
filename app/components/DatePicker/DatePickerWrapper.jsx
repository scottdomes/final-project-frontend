var React = require('react');

var DatePickerWrapper = React.createClass({
  render: function () {
    return (
      <div className="row" id="enter-location" style={{marginTop: "35px"}}>
        <div className="large-6 large-centered columns">
          <h4>Select start and end dates</h4>
          {this.props.children} 
        </div> 
      </div>
    )
  }
});

module.exports = DatePickerWrapper;