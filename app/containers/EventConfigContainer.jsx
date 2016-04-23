var React = require('react');
var DatePickerWrapper = require('../components/DatePicker/DatePickerWrapper.jsx');
var DatePicker = require('../components/DatePicker/DatePicker.jsx');
var VoteActivator = require('../components/EventConfig/VoteActivator.jsx');
var EventNameInput = require('../components/EventConfig/EventNameInput.jsx');

var EventConfigContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      vote_on_date: false,
      vote_on_location: false,
      eventName: '',
      showEventInput: true
    }
  },
  handleNewDate: function (range) {
    this.props.onNewDate(range);
  },
  handleDone: function (e) {
    e.stopPropagation();
    this.props.onSubmitEvent(this.state.eventName);
  },
  handleVoteActivatorChange: function (selectionStatus, label) {
    this.props.onVoteActivatorChange(selectionStatus, label);
  },
  handleEventNameSubmit: function (input) {
    this.setState({
      eventName: input,
      showEventInput: false
    });
  },
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="large-6 large-centered large columns text-center">
            <h4 id="event-details-header">Details for your trip to {this.props.locationInput}</h4>
          </div>
        </div>
        <div className="row">
          <div className="large-6 large columns large-centered text-center">
            { this.state.showEventInput
                ? <EventNameInput onEventNameSubmit={this.handleEventNameSubmit} />
                : <h4>Codename: {this.state.eventName}</h4>
            }
          </div>
        </div>
        <DatePickerWrapper>
          <DatePicker  onNewSelection={this.handleNewDate}/>
        </DatePickerWrapper>
        <VoteActivator onClick={this.handleVoteActivatorChange} />
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