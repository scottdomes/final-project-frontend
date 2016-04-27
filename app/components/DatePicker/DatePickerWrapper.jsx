var React = require('react');

var DatePickerWrapper = React.createClass({
  render: function () {
    return (
      <div className="row" id="enter-location" style={{marginTop: "35px"}}>
        <div className="large-6 large-centered medium-8 medium-centered columns">
          <h4>When do you want to take this trip with friends?</h4>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = DatePickerWrapper;
