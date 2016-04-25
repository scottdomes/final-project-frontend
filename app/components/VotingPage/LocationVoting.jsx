var React = require('react');
var LocationOption = require('./LocationOption.jsx');

var LocationVoting = React.createClass({
  handleAddOrRemoveVote: function (optionID, action) {
    this.props.onAddOrRemoveVote(optionID, action, "campsite");
  },
  generateLocations: function () {
    var locationList = [];
    var thisComponent = this;
    if (this.props.votingAllowed) {
      locationList = this.props.locations.map(function (location, index) {
        return <LocationOption 
          name={location.campsite.name} 
          key={index}
          id={location.campsite.id} 
          votes={location.votes.length}
          hideVoteButton={thisComponent.props.hideVoteButton}
          onAddOrRemoveVote={thisComponent.handleAddOrRemoveVote}/>
      });
    } else {
      locationList = this.props.locations.map(function (location, index) {
        return <LocationOption 
          name={location.campsite.name} 
          key={index}
          id={location.campsite.id} 
          votingDisallowed={true}/>
      });
    }
    return locationList;
  },
  render: function () {
    var locationList = this.generateLocations();
    return (
      <div>
        <div id="location-options" className="row">
          {locationList}
        </div>
      </div>
    )
  }
});

module.exports = LocationVoting;