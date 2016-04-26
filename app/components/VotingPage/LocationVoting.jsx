var React = require('react');
var LocationOption = require('./LocationOption.jsx');

var LocationVoting = React.createClass({
  handleVote: function (optionID) {
    this.props.onVote(optionID, "campsite");
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
          onVote={thisComponent.handleVote}/>
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