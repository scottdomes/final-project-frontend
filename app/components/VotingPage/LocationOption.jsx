var React = require('react');

var LocationOption = React.createClass({
  handleVote: function (e) {
    e.stopPropagation();
    this.props.onVote(this.props.id);
  },
  getUserProfileImages: function (voteList, userList){
    return voteList.map((vote, index) => {
      if (userList[vote.user_id - 1].picture_path){
        return <img src={userList[vote.user_id - 1].picture_path} key={vote.user_id} className="vote-user-picture" />
      } else {
        return <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0Nn66fyQBiklzI5EQbDh269jHQss2HQk6zgyRroyY6PkkmOHK' key={vote.user_id} className="vote-user-picture" />
      }
    });
  },
  render: function () {

    var voteDisplay = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    if (!this.props.votingDisallowed && !(this.props.votingDisallowed === false)){
      var locationVotePictures = this.getUserProfileImages(this.props.campsiteVotes, this.props.allEventParticipants);
    }
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-6 large-centered columns" : "large-6 columns end"; 
    return (
      <div className={centeredEventIfOnly}>
        <div className="location-option-wrapper card">
          <div className={"location-image " + this.props.classEnumerator}><div className='user-profile-vote-list'>{locationVotePictures && locationVotePictures}</div></div>
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