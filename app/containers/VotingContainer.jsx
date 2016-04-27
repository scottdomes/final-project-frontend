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
      fadeInClass: 'appear-enter',
      hideHeaders: false
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
  hideHeaders: function () {
    var boolean = this.state.hideHeaders ? false : true;
    this.setState({
      hideHeaders: boolean
    });
  },
  render: function () {
    var headerDisplay = this.state.hideHeaders ? {"visibility": "hidden"} : {"visibility": "visible"}
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

          <div id="voting-page-heading-row" className="row" style={headerDisplay}>
            <div className="large-8 large columns text-center">
              <h5>{ this.props.locationVotingAllowed ? "Potential Locations:" : "Location:" }</h5>
            </div>
            <div className="large-4 large columns text-center">
              <h5>{ this.props.dateVotingAllowed ? "Potential Dates:" : "Date:" }</h5>
            </div>
          </div>

          <AddDateOrLocation
            onLocationSubmit={this.handleNewLocationSubmit} 
            onChange={this.handleLocationInputChange}
            onDateSubmit={this.handleNewDateSubmit}
            dateVotingAllowed={this.props.dateVotingAllowed}
            locationVotingAllowed={this.props.locationVotingAllowed}
            onDisplayCalendar={this.hideHeaders}
            locationButtonDisplay={headerDisplay}/>

          <div className="row">
            <div className="large-8 columns">
              <LocationVoting 
                locations={this.props.locations}
                onVote={this.handleVote}
                votingAllowed={this.props.locationVotingAllowed}
                campsiteVotes={this.props.campsiteVotes}
                allEventParticipants={this.props.allEventParticipants}/>
            </div>
            <div className="large-4 columns">
              <DateVoting
                dateRanges={this.props.dateRanges}
                votingAllowed={this.props.dateVotingAllowed}
                onVote={this.handleVote}
                currentUserAddedDate={this.props.currentUserAddedDate}
                dateVotes={this.props.dateVotes}
                allEventParticipants={this.props.allEventParticipants} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = VotingContainer;