var React = require('react');
var LocationVoting = require('../components/VotingPage/LocationVoting.jsx');
var DateVoting = require('../components/VotingPage/DateVoting.jsx');
var EventHeader = require('../components/VotingPage/EventHeader.jsx');
var AddDateOrLocation = require('../components/VotingPage/AddDateOrLocation.jsx');

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
      dateRanges: this.props.dateRanges,
      fadeInClass: 'appear-enter'
    }
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
  handleVote: function (optionID, category) {
    // if (action.add && category === "date") {
    //   this.addDateVote(optionID);
    // } else if (!action.add && category === "date") {
    //   this.removeDateVote(optionID);
    // } else if (action.add && category === "campsite") {
    //   this.addLocationVote(optionID);
    // } else if (!action.add && category === "campsite") {
    //   this.removeLocationVote(optionID);
    // }

    this.props.onVote(optionID, category);
  },
  handleVoteEnd: function () {
    this.props.onVoteEnd();
  },
  componentDidMount: function () {
    console.log("Component did mount!");
    this.setState({
      fadeInClass: "appear-enter appear-enter-active"
    });
  },
  render: function () {
    return (
      <div className={this.state.fadeInClass}>
        <div id="voting-page-heading" className="row">
          <div className="large-12 large columns text-center">
            <h3>Choose Your Destination</h3>
          </div>
        </div>
        <div id="voting-page-wrapper">
          <EventHeader
            userName={this.props.userName}
            currentEventCreator={this.props.currentEventCreator}
            currentEventDetails={this.props.currentEventDetails}
            userIsCreator={this.props.userIsCreator}
            onVoteEnd={this.handleVoteEnd}/>
          <LocationVoting 
            locations={this.props.locations}
            onVote={this.handleVote}
            votingAllowed={this.props.locationVotingAllowed}
            campsiteVotes={this.props.campsiteVotes}
            allEventParticipants={this.props.allEventParticipants}/>
          <div className="row">
            <div className="large-12 large columns text-center">
              <h5>{ this.props.dateVotingAllowed ? "Potential Dates:" : "Date:" }</h5>
            </div>
          </div>
          <DateVoting
            dateRanges={this.props.dateRanges}
            votingAllowed={this.props.dateVotingAllowed}
            onVote={this.handleVote}
            dateVotes={this.props.dateVotes}
            allEventParticipants={this.props.allEventParticipants}
            currentUserAddedDate={this.props.currentUserAddedDate} />
          <AddDateOrLocation
            onLocationSubmit={this.handleNewLocationSubmit} 
            onChange={this.handleLocationInputChange}
            onDateSubmit={this.handleNewDateSubmit}
            dateVotingAllowed={this.props.dateVotingAllowed}/>
        </div>
      </div>
    )
  }
});

module.exports = VotingContainer;