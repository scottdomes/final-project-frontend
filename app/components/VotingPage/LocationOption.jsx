var React = require('react');

var LocationOption = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    this.props.onVote(this.props.id);
  },
  render: function () {
    var voteDisplayStyle = this.props.votingDisallowed ? {'display': 'none'} : {'display': 'block'};
    return (
      <div className="large-4 columns end">
        <div className="location-option-wrapper card">
          <div className="location-image"></div>
          <div className="location-info card-section">
            <h3>{this.props.name}</h3>
            <div className="vote-container" style={voteDisplayStyle}>
              <h4>Votes: {this.props.votes}</h4>
              <button 
                className="location-vote-button button success"
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

module.exports = LocationOption;