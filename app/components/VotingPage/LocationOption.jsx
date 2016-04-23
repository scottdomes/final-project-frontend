var React = require('react');

var LocationOption = React.createClass({
  handleAddVote: function (e) {
    e.stopPropagation();
    this.props.onAddOrRemoveVote(this.props.id, {add: true});
  },
  handleRemoveVote: function (e) {
    e.stopPropagation();
    this.props.onAddOrRemoveVote(this.props.id, {add: false})
  },
  render: function () {
    var voteDisplay = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-4 large-centered columns" : "large-4 columns end"; 
    var hiddenVoteButton = this.props.hideVoteButton ? {'display': 'none'} : {'display': 'block'};
    var showChangeVoteButton = !this.props.hideVoteButton ? {'display': 'none'} : {'display': 'inline-block'};
    return (
      <div className={centeredEventIfOnly}>
        <div className="location-option-wrapper card">
          <div className="location-image"></div>
          <div className="location-info card-section">
            <h3>{this.props.name}</h3>
            <div className="vote-container" style={voteDisplay}>
              <h4>Votes: {this.props.votes}</h4>
              <button 
                className="location-vote-button button success"
                onClick={this.handleAddVote}
                style={hiddenVoteButton}>
                  Vote
              </button>
              <button 
                className="location-vote-button button success wide"
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

module.exports = LocationOption;