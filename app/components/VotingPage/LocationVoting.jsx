var React = require('react');
var LocationOption = require('./LocationOption.jsx');

var LocationVoting = React.createClass({
  handleVote: function (optionID) {
    this.props.onVote(optionID, "campsite");
  },
  // getLocationVotes: function (campsiteVotes, location){
  //   return campsiteVotes.filter(function (vote){
  //     return vote.camp_site_id === location.id ? true : false;
  //   });
  // },
  generateLocations: function () {
    var locationList = [];
    var thisComponent = this;
    var classNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    if (this.props.votingAllowed) {
      locationList = this.props.locations.map(function (location, index) {
        // var locationVotes = thisComponent.getLocationVotes(thisComponent.props.campsiteVotes, location.campsite);
        return <LocationOption 
          classEnumerator={classNames[index]}
          name={location.campsite.name} 
          key={index}
          id={location.campsite.id} 
          votes={location.votes.length}
          onVote={thisComponent.handleVote}
          campsiteVotes={location.votes}
          allEventParticipants={thisComponent.props.allEventParticipants}/>
      });
    } else {
      locationList = this.props.locations.map(function (location, index) {
        return <LocationOption 
          classEnumerator={classNames[index]}
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