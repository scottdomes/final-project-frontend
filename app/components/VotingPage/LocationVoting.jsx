var React = require('react');
var LocationOption = require('./LocationOption.jsx');

var LocationVoting = React.createClass({
  handleVote: function (optionID) {
    this.props.onVote(optionID, "campsite");
  },
  getLocationVotes: function (campsiteVotes, location){
    return campsiteVotes.filter(function (vote){
      return vote.camp_site_id === location.id ? true : false;
    });
  },
  getUserVoteList: function (locationVotes, userList){
    console.log('getUserVoteList')
    console.log(locationVotes)
    console.log(userList)
    //location votes can be multiple
    //userlist can be multiple
    // looop through location votes, and do an inner loop on userlist
    //if location vote.user_id == user.id then add it to the 
  },
  generateLocations: function () {
    var locationList = [];
    var thisComponent = this;
    // console.log('look here ');
    // console.log(this.props);
    if (this.props.votingAllowed) {
      locationList = this.props.locations.map(function (location, index) {
        var locationVotes = thisComponent.getLocationVotes(thisComponent.props.campsiteVotes, location.campsite);
        // var userVoteList = thisComponent.getUserVoteList(locationVotes, thisComponent.props.allEventParticipants);
        // console.log('locaiton votes');
        // console.log(locationVotes);
        return <LocationOption 
          name={location.campsite.name} 
          key={index}
          id={location.campsite.id} 
          votes={location.votes.length}
          onVote={thisComponent.handleVote}
          campsiteVotes={locationVotes}
          allEventParticipants={thisComponent.props.allEventParticipants}/>
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