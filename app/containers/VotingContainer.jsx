var React = require('react');
var LocationVoting = require('../components/VotingPage/LocationVoting.jsx');
var DateVoting = require('../components/VotingPage/DateVoting.jsx');
var locations = [];
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
    // dateRanges.push({
    //   start_date: this.props.dateRange.start_date,
    //   end_date: this.props.dateRange.end_date,
    //   id: 0,
    //   votes: 0
    // })
    return {
      addLocationInput: '',
      locations: locations,
      name: '',
      dateRanges: this.props.dateRanges,
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
    locations[optionID].votes += 1;
    this.setState({
      locations: locations,
      currentUserVotedLocation: true
    });
  },
  removeLocationVote: function (optionID) {
    locations[optionID].votes -= 1;
    this.setState({
      locations: locations,
      currentUserVotedLocation: false
    });
  },
  addDateVote: function (optionID) {
    dateRanges[optionID].votes += 1;
    this.setState({
      dateRanges: dateRanges,
      currentUserVotedDate: true
    });
  },
  removeDateVote: function (optionID) {
    dateRanges[optionID].votes -= 1;
    this.setState({
      dateRanges: dateRanges,
      currentUserVotedDate: false
    });
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
          onAddOrRemoveVote={this.handleAddOrRemoveVote}
          hideVoteButton={this.state.currentUserVotedLocation}
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
          hideVoteButton={this.state.currentUserVotedDate}
          onAddOrRemoveVote={this.handleAddOrRemoveVote} />
      </div>
    )
  }
});

module.exports = VotingContainer;