var React = require('react');

var DateOption = React.createClass({
  handleVote: function (e) {
    e.stopPropagation();
    this.props.onVote(this.props.id);
  },
  render: function () {
    var voteDisplayStyle = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    var centeredEventIfOnly = this.props.votingDisallowed ? "large-4 large-centered columns" : "large-4 columns end"; 
    return (
      <div className={centeredEventIfOnly}>
        <div className="date-option-wrapper card">
          <div className="date-info card-section text-center">
            <p className="date-option-range">{this.props.start_date} to {this.props.end_date}</p>
            <div className="vote-container" style={voteDisplayStyle}>
              <h4>Votes: {this.props.votes}</h4>
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