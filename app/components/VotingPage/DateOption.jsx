var React = require('react');

var DateOption = React.createClass({
  handleVote: function (e) {
    e.stopPropagation();
    this.props.onVote(this.props.id);
  },
  getUserProfileImages: function (voteList, userList){
    return voteList.map((vote, index) => {
      // console.log('profile image is');
      // console.log(userList[vote.user_id].picture_path);
      if (userList[vote.user_id - 1].picture_path){
        return <img src={userList[vote.user_id - 1].picture_path} key={vote.user_id} className="vote-user-picture" />
      } else {
        return <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0Nn66fyQBiklzI5EQbDh269jHQss2HQk6zgyRroyY6PkkmOHK' key={vote.user_id} className="vote-user-picture" />
      }
    });
  },
  render: function () {
    var voteDisplayStyle = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-4 large-centered columns" : "large-4 columns end"; 
    var dateVotePictures = this.getUserProfileImages(this.props.dateVotes, this.props.allEventParticipants);

    return (
      <div className={centeredEventIfOnly}>
        <div className="date-option-wrapper card">
          <div className="date-info card-section text-center">
            <p className="date-option-range">{this.props.start_date} to {this.props.end_date}</p>
            <div className="vote-container" style={voteDisplayStyle}>
              <h4>Votes: {this.props.votes}</h4>
              <div className='date-vote-row'>
                {dateVotePictures}
              </div>
              <button 
                className="date-vote-button button success wide"
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

module.exports = DateOption;