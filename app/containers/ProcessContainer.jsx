var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var ProcessContainer = React.createClass({
  getInitialState: function () {
    return {
      current_page: 1,
      pages: ['/', 'event/eventconfig', 'event/addfriends', 'event/vote']
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillMount: function () {
    if (this.props.locationInput === "Test Location") {
      browserHistory.replace({
        pathname: '/'
      })
    }
  },
  handleBackButtonClick: function () {
    var pageNumber = this.state.current_page - 1
    var page = this.state.pages[page];
    this.context.router.push({
      pathname: page
    });
  },
  handleNewInput: function (input) {
    this.props.onNewInput(input)
  },
  handleNewDate: function (range) {
    this.props.onNewDate(range);
  },
  handleLogin: function () {
    this.props.onLogin()
  },
  handleLogout: function () {
    this.props.onLogout()
  },
  handleVoteActivatorChange: function (selectionStatus, label) {
    this.props.onVoteActivatorChange(selectionStatus, label);
  },
  handleSubmitEvent: function (eventDetails) {
    console.log('Process props')
    console.log(eventDetails);
    this.props.onSubmitEvent(eventDetails);
  },
  handleDoneFriends: function () {
    this.props.onDoneFriends();
  },
  callEventLoad: function () {
    this.props.loadEvent();
  },
  handleVote: function (id, category) {
    this.props.onVote(id, category);
  },
  handleNewLocation: function (name) {
    this.props.onNewLocation(name);
  },
  handleNewDateRange: function (range) {
    this.props.onNewDateRange(range);
  },
  handleVoteEnd: function () {
    this.props.onVoteEnd();
  },
  render: function () {
    var children = React.cloneElement(
            this.props.children,
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              locationInput: this.props.locationInput,

              currentEventDetails: this.props.currentEventDetails,
              dateRanges: this.props.dateRanges,
              locations: this.props.locations,
              eventParticipants: this.props.eventParticipants,

              loggedin: this.props.loggedin,

              userName: this.props.userName,
              picturePath: this.props.picturePath,

              onLogin: this.handleLogin,
              onLogout: this.handleLogout,
              onVoteActivatorChange: this.handleVoteActivatorChange,
              onSubmitEvent: this.handleSubmitEvent,
              onDoneFriends: this.handleDoneFriends,
              loadEvent: this.callEventLoad,
              dateVotingAllowed: this.props.dateVotingAllowed,
              locationVotingAllowed: this.props.locationVotingAllowed,

              onVote: this.handleVote,

              currentUserVotedDate: this.props.currentUserVotedDate,
              currentUserVotedLocation: this.props.currentUserVotedLocation,
              currentUserAddedDate: this.props.currentUserAddedDate,
              userIsCreator: this.props.userIsCreator,
              currentEventCreator: this.props.currentEventCreator,

              event_id: this.props.event_id,

              onNewLocation: this.handleNewLocation,
              onNewDateRange: this.handleNewDateRange,

              onVoteEnd: this.handleVoteEnd
            }
        );
    return (
      <div id="process-container">
        <ProgressIndicator page={this.state.pages[this.state.current_page]}/>
        <div id="process-body-container">
          <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {children}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
});

module.exports = ProcessContainer;
