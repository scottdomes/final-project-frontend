var React = require('react');
var LocationVoting = require('../components/VotingPage/LocationVoting.jsx');
var locations = [];

var VotingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    locations.push(
          {
            name: this.props.locationInput,
            id: 0,
            votes: 0
          }
        );
    return {
      addLocationInput: '',
      locations: locations
    }
  },
  componentWillMount: function () {
    
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
            <h3>{this.props.userName} created the event {this.props.locationInput}</h3>
          </div>
        </div>
        <LocationVoting 
          locations={locations}
          onSubmit={this.handleNewLocationSubmit} 
          onChange={this.handleLocationInputChange}
          onVote={this.handleVote}/>
        <div id="date-options" className="row">
          <div className="large-4 large-centered large columns text-{this.props.dateRange.start} to center">
            <button className="date-option-button button success">April 28 to May 1</button>
          </div>
        </div>
        <div id="add-date" className="row">
          <div className="large-4 large-centered large columns text-{this.props.dateRange.start} to center">
            <input type="text" placeholder="Add date..." />
          </div>
        </div>
        <h3>Start Date: {this.props.dateRange.start}</h3>
        <h3>End Date: {this.props.dateRange.end}</h3>
      </div>
    )
  }
});

module.exports = VotingContainer;