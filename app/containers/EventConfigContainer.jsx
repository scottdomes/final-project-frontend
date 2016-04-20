var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var DatePickerWrapper = require('../components/DatePickerWrapper.jsx');
var DatePicker = require('../components/DatePicker.jsx');
var VoteActivator = require('../components/VoteActivator.jsx');
var BackButton = require('../components/BackButton.jsx');


var EventConfigContainer = React.createClass({
  render: function () {
    return (
      <div>
        <BackButton prevpage={"/addfriends"}/>
        <ProgressIndicator page={"eventconfig"}/>
        <div className="row">
          <div className="large-6 large-centered large columns text-center">
            <h4 id="event-details-header">Details for your trip to {this.props.locationInput}</h4>
          </div>
        </div>
        <DatePickerWrapper>
          <DatePicker />
        </DatePickerWrapper>
        <VoteActivator />
      </div>
    )
  }
});

module.exports = EventConfigContainer;