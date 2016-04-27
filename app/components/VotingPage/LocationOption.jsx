var React = require('react');

var LocationOption = React.createClass({
  handleVote: function (e) {
    e.stopPropagation();
    this.props.onVote(this.props.id);
  },
  getUserProfileImages: function (campsiteVotes, userList){
    return campsiteVotes.map((vote, index) => {
      console.log('profile image is');
      console.log(userList[vote.user_id].picture_path);
      return <img src={userList[vote.user_id].picture_path} className="vote-user-picture" />
    });
  },
  render: function () {
     console.log('look here ');
    console.log(this.props);
    var voteDisplay = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-4 large-centered columns" : "large-4 columns end"; 
    var votePictures = this.getUserProfileImages(this.props.campsiteVotes,this.props.allEventParticipants);
    return (
      <div className={centeredEventIfOnly}>
        <div className="location-option-wrapper card">
          <div className="location-image">{votePictures}</div>
          <div className="location-info card-section">
            <h3>{this.props.name}</h3>
            <h4>Votes: {this.props.votes}</h4>
            <div className="vote-container" style={voteDisplay}>
              <button 
                className="location-vote-button button success"
                onClick={this.handleVote}>
                  Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LocationOption;