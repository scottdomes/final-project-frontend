var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var DatePickerWrapper = require('../components/DatePicker/DatePickerWrapper.jsx');
var DatePicker = require('../components/DatePicker/DatePicker.jsx');
var VoteActivator = require('../components/EventConfig/VoteActivator.jsx');
var BackButton = require('../components/BackButton.jsx');


var EventConfigContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleNewDate: function (range) {
    this.props.onNewDate(range);
  },
  handleDone: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: '/vote'
    })
  },
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
          <DatePicker  onNewSelection={this.handleNewDate}/>
        </DatePickerWrapper>
        <VoteActivator />
        <div className="row" id="button-eventconfig-done">
          <div className="large-6 large-centered columns text-center">
            <button className="button success wide" onClick={this.handleDone}>Done</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = EventConfigContainer;