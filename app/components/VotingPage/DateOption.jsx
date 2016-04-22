var React = require('react');

var DateOption = React.createClass({
  handleClick: function (e) {
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
            <h3>{this.props.start_date} to {this.props.end_date}</h3>
            <p className="date-option-range">May 3rd 2016 to May 4th 2016</p>
            <div className="vote-container" style={voteDisplayStyle}>
              <h4>Votes: {this.props.votes}</h4>
              <button 
                className="date-vote-button button success"
                onClick={this.handleClick}>
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