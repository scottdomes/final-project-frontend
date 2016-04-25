var React = require('react');
var LocationVoting = require('../components/VotingPage/LocationVoting.jsx');
var DateVoting = require('../components/VotingPage/DateVoting.jsx');
var EventHeader = require('../components/VotingPage/EventHeader.jsx');

var $ = require('jquery');

var VotingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      addLocationInput: '',
      locations: this.props.locations,
      name: '',
      dateRanges: this.props.dateRanges
    }
  },
  componentWillMount: function () {
    this.props.loadEvent();
  },
  handleDone: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: '/event'
    })
  },
  handleNewLocationSubmit: function () {
    this.props.onNewLocation(this.state.addLocationInput);
  },
  handleNewDateSubmit: function (range) {
    this.props.onNewDateRange(range);
  },
  handleLocationInputChange: function (input) {
    this.setState({
      addLocationInput: input
    });
  },
  handleAddOrRemoveVote: function (optionID, action, category) {
    if (action.add && category === "date") {
      this.addDateVote(optionID);
    } else if (!action.add && category === "date") {
      this.removeDateVote(optionID);
    } else if (action.add && category === "campsite") {
      this.addLocationVote(optionID);
    } else if (!action.add && category === "campsite") {
      this.removeLocationVote(optionID);
    }

    this.props.onAddOrRemoveVote(action, category, optionID);
  },
  addLocationVote: function (optionID) {
    this.setState({
      currentUserVotedLocation: true
    });
  },
  removeLocationVote: function (optionID) {
    this.setState({
      currentUserVotedLocation: false
    });
  },
  addDateVote: function (optionID) {
    this.setState({
      currentUserVotedDate: true
    });
  },
  removeDateVote: function (optionID) {
    this.setState({
      currentUserVotedDate: false
    });
  },
  handleVoteEnd: function () {
    this.props.onVoteEnd();
  },
  render: function () {
    return (
      <div>
        <div id="voting-page-heading" className="row">
          <div className="large-12 large columns text-center">
            <h3>Choose Your Destination</h3>
          </div>
        </div>
        <EventHeader
          userName={this.props.userName}
          currentEventCreator={this.props.currentEventCreator}
          currentEventDetails={this.props.currentEventDetails}
          userIsCreator={this.props.userIsCreator}
          onVoteEnd={this.handleVoteEnd}/>
        <LocationVoting 
          locations={this.props.locations}
          onSubmit={this.handleNewLocationSubmit} 
          onChange={this.handleLocationInputChange}
          onAddOrRemoveVote={this.handleAddOrRemoveVote}
          hideVoteButton={this.props.currentUserVotedLocation}
          votingAllowed={this.props.locationVotingAllowed}/>
        <div className="row">
          <div className="large-12 large columns text-center">
            <h5>{ this.props.dateVotingAllowed ? "Potential Dates:" : "Date:" }</h5>
          </div>
        </div>
        <DateVoting
          dateRanges={this.props.dateRanges}
          onSubmit={this.handleNewDateSubmit}
          votingAllowed={this.props.dateVotingAllowed}
          hideVoteButton={this.props.currentUserVotedDate}
          onAddOrRemoveVote={this.handleAddOrRemoveVote}
          currentUserAddedDate={this.props.currentUserAddedDate} />
      </div>
    )
  }
});

module.exports = VotingContainer;