var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var DatePickerWrapper = require('../components/DatePickerWrapper.jsx');
var DatePicker = require('../components/DatePicker.jsx');
var VoteActivator = require('../components/VoteActivator.jsx');


var EventConfigContainer = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.locationInput}</h1>
        <ProgressIndicator />
        <DatePickerWrapper>
          <DatePicker />
        </DatePickerWrapper>
        <VoteActivator />
      </div>
    )
  }
});

module.exports = EventConfigContainer;