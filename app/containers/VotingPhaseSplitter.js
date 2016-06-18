var React = require('react');
var VotingContainer = require('./VotingContainer');
var EventDetailsContainer = require('./EventPageContainers/EventDetailsContainer');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TransitionContainer = require('react-page-transitions');

// import {connect} from 'react-redux';
// import actions from '../actions/PackingListActions';


var VotingPhaseSplitter = React.createClass({
  getInitialState: function () {
    return {
      loading: false
    }
  },
  componentWillMount: function () {
    console.log("Voting phase splitter calling load event");
    this.props.loadEvent();
    this.setState({
      loading: true
    });
  },
  componentWillReceiveProps: function () {
    this.setState({
      loading: false
    });
  },
  render: function () {
    // console.log('Voting Phase Splitter Rendering');
    // console.log(this.props.currentEventDetails.voting_phase)
    var component = this.props.currentEventDetails.voting_phase 
                    ? <VotingContainer/>
                    : <EventDetailsContainer/>;
    var actual = this.state.loading? <div id="loading-screen"></div> : React.cloneElement(component, Object.assign({}, this.props));
    return (
          actual

    )
  }
});

module.exports = VotingPhaseSplitter;