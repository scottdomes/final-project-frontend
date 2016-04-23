var React = require('react');

var DateOption = React.createClass({
  handleAddVote: function (e) {
    e.stopPropagation();
    this.props.onAddOrRemoveVote(this.props.id, {add: true});
  },
  handleRemoveVote: function (e) {
    e.stopPropagation();
    this.props.onAddOrRemoveVote(this.props.id, {add: false})
  },
  render: function () {
    var voteDisplayStyle = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-4 large-centered columns" : "large-4 columns end"; 
    var hiddenVoteButton = this.props.hideVoteButton ? {'display': 'none'} : {'display': 'inline-block'};
    var showChangeVoteButton = !this.props.hideVoteButton ? {'display': 'none'} : {'display': 'inline-block'};
    return (
      <div className={centeredEventIfOnly}>
        <div className="date-option-wrapper card">
          <div className="date-info card-section text-center">
            <p className="date-option-range">{this.props.start_date} to {this.props.end_date}</p>
            <div className="vote-container" style={voteDisplayStyle}>
              <h4>Votes: {this.props.votes.length}</h4>
              <button 
                className="date-vote-button button success wide"
                onClick={this.handleAddVote}
                style={hiddenVoteButton}>
                  Vote
              </button>
              <button 
                className="date-vote-button button success wide"
                onClick={this.handleRemoveVote}
                style={showChangeVoteButton}>
                  Change Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DateOption;