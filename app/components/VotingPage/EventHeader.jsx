var React = require('react');

var EventHeader = React.createClass({
  handleVoteEnd: function (e) {
    e.stopPropagation();
    this.props.onVoteEnd();
  },
  render: function () {
    var showEndVote = this.props.userIsCreator ? {"display": "inline-block"} : {"display": "none"};
    return (
      <div id="event-header-vote-page">
        <div id="event-header-left">
          <h3>{this.props.currentEventDetails.name}</h3>
        </div>
        <div id="event-header-right">
          <img id="event-creator-pic" src={this.props.currentEventCreator.picture_path}/>
          <p>Created by {this.props.userName}</p>
          <button 
            className="button alert"
            onClick={this.handleVoteEnd}
            style={showEndVote}>
              End Voting
          </button>
        </div>              
      </div>
    )
  }
});

module.exports = EventHeader;