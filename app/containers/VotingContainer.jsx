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
      start: this.props.dateRange.start,
      end: this.props.dateRange.end
    })
    return {
      addLocationInput: '',
      locations: locations,
      name: '',
      dateRanges: dateRanges
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
  handleLocationInputChange: function (input) {
    this.setState({
      addLocationInput: input
    });
  },
  handleVote: function (key) {
    locations[key].votes += 1;
    this.setState({
      locations: locations
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
          onVote={this.handleVote}
          votingAllowed={this.props.locationVotingAllowed}/>
        <DateVoting
          dateRanges={dateRanges} />
        <h3>Start Date: {this.props.dateRange.start_date}</h3>
        <h3>End Date: {this.props.dateRange.end_date}</h3>
      </div>
    )
  }
});

module.exports = VotingContainer;