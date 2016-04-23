var React = require('react');
var LocationVoting = require('../components/VotingPage/LocationVoting.jsx');
var DateVoting = require('../components/VotingPage/DateVoting.jsx');
var locations = [];
var dateRanges = [];
var $ = require('jquery');

var VotingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    locations.push({
      name: this.props.eventName,
      id: 0,
      votes: 0
    });
    dateRanges.push({
      start_date: this.props.dateRange.start_date,
      end_date: this.props.dateRange.end_date,
      id: 0,
      votes: 0
    })
    return {
      addLocationInput: '',
      locations: locations,
      name: '',
      dateRanges: dateRanges,
      currentUserVotedLocation: false,
      currentUserVotedDate: false
    }
  },
  componentWillMount: function () {
    if (this.props.eventName === '') {
      console.log("Calling load event in votingContainer");
      this.props.loadEvent();
    }
  },
  handleDone: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: '/event'
    })
  },
  handleNewLocationSubmit: function () {
    locations.push({
          name: this.state.addLocationInput,
          id: this.state.locations.length,
          votes: 0
        });
    this.setState({
      locations: locations
    });
  },
  handleNewDateSubmit: function (range) {
    dateRanges.push({
      start_date: range.start_date,
      end_date: range.end_date,
      id: this.state.locations.length,
      votes: 0
    });
    this.setState({
      dateRanges: dateRanges
    });
  },
  handleLocationInputChange: function (input) {
    this.setState({
      addLocationInput: input
    });
  },
  handleLocationVote: function (key) {
    locations[key].votes += 1;
    this.setState({
      locations: locations,
      currentUserVotedLocation: true
    });
    this.props.onAddVote(locations[key], "campsite");
  },
  handleDateVote: function (key) {
    dateRanges[key].votes += 1;
    this.setState({
      dateRanges: dateRanges,
      currentUserVotedDate: true
    });
    this.props.onAddVote(dateRanges[key], "date");
  },
  render: function () {
    return (
      <div>
        <div id="voting-page-heading" className="row">
          <div className="large-12 large columns text-center">
            <h3>{this.props.userName} created the event {this.props.eventName}</h3>
          </div>
        </div>
        <LocationVoting 
          locations={locations}
          onSubmit={this.handleNewLocationSubmit} 
          onChange={this.handleLocationInputChange}
          onVote={this.handleLocationVote}
          hideVoteButton={this.state.currentUserVotedLocation}
          votingAllowed={this.props.locationVotingAllowed}/>
        <div className="row">
          <div className="large-12 large columns text-center">
            <h5>{ this.props.dateVotingAllowed ? "Potential Dates:" : "Date:" }</h5>
          </div>
        </div>
        <DateVoting
          dateRanges={dateRanges}
          onSubmit={this.handleNewDateSubmit}
          votingAllowed={this.props.dateVotingAllowed}
          onVote={this.handleDateVote} />
        <h3>Start Date: {this.props.dateRange.start_date}</h3>
        <h3>End Date: {this.props.dateRange.end_date}</h3>
      </div>
    )
  }
});

module.exports = VotingContainer;