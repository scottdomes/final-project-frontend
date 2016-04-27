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

    }
  },
  handleNewDate: function (range) {
    this.props.onNewDate(range);
  },
  handleDone: function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('Event Config Props')
    console.log(this.props)
    if (document.getElementById("event-name-input").value==""){
      document.getElementById("event-name-input").focus();
      document.getElementById("event-name-input").setAttribute('style', 'border-color:red;');
    }
    else{
      eventDetails = {
        eventName: this.state.eventName,
        vote_on_date: this.props.dateVotingAllowed,
        vote_on_location: this.props.locationVotingAllowed
      }
      this.props.onSubmitEvent(eventDetails);
    }

  },
  handleVoteActivatorChange: function (selectionStatus, label) {
    console.log('clicked a selection');
    this.props.onVoteActivatorChange(selectionStatus, label);
  },
  handleEventNameSubmit: function (input) {
    this.setState({
      eventName: input,
    });
  },
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="large-6 large-centered columns">
            <h4 id="event-details-header">Set up your trip to {this.props.locationInput}</h4>
          </div>
          <div className="large-6 columns large-centered text-center" style={{float: "none"}}>
            <EventNameInput onEventNameSubmit={this.handleEventNameSubmit} />
          </div>
        </div>

        <DatePickerWrapper>
          <DatePicker  onNewSelection={this.handleNewDate}/>
        </DatePickerWrapper>
        <VoteActivator onClick={this.handleVoteActivatorChange} />
        <div className="row" id="button-eventconfig-done" style={{marginTop: "35px"}}>
          <div className="large-6 large-centered columns text-center">
            <button className="button success wide" onClick={this.handleDone}>Invite Friends</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = EventConfigContainer;
