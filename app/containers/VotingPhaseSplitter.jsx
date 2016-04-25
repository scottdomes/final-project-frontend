var React = require('react');
var VotingContainer = require('./VotingContainer.jsx');
var EventDetailsContainer = require('./EventPageContainers/EventDetailsContainer.jsx');


var VotingPhaseSplitter = React.createClass({
  componentWillMount: function () {
    this.props.loadEvent();
  },
  render: function () {
    console.log('Voting Phase Splitter Rendering');
    console.log(this.props.currentEventDetails.voting_phase)
    var component = this.props.currentEventDetails.voting_phase 
                    ? <VotingContainer/>
                    : <EventDetailsContainer/>;
    var actual = React.cloneElement(component, Object.assign({}, this.props));
    return (
      actual
    )
  }
});

module.exports = VotingPhaseSplitter;