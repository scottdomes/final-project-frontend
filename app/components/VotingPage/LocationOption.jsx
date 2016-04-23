var React = require('react');

var LocationOption = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    this.props.onVote(this.props.id);
  },
  render: function () {
    var voteDisplay = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-4 large-centered columns" : "large-4 columns end"; 
    var hiddenVoteButton = this.props.hideVoteButton ? {'display': 'none'} : {'display': 'block'};
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
                onClick={this.handleClick}
                style={hiddenVoteButton}>
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