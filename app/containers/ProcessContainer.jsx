var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var BackButton = require('../components/BackButton.jsx');

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
  handleSubmitEvent: function (eventName) {
    this.props.onSubmitEvent(eventName);
  },
  handleDoneFriends: function () {
    this.props.onDoneFriends();
  },
  callEventLoad: function () {
    this.props.loadEvent();
  },
  handleAddOrRemoveVote: function (action, category, id) {
    this.props.onAddOrRemoveVote(action, category, id);
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

              eventName: this.props.eventName,
              dateRanges: this.props.dateRanges,
              locations: this.props.locations,
              
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
              onAddOrRemoveVote: this.handleAddOrRemoveVote,
              
              currentUserVotedDate: this.props.currentUserVotedDate,
              currentUserVotedLocation: this.props.currentUserVotedLocation,
              currentUserAddedDate: this.props.currentUserAddedDate,
              userIsCreator: this.props.userIsCreator,

              onNewLocation: this.handleNewLocation,
              onNewDateRange: this.handleNewDateRange,

              onVoteEnd: this.handleVoteEnd
            }
        );
    return (
      <div id="process-container">
        <ProgressIndicator page={this.state.pages[this.state.current_page]}/>
        <BackButton onClick={this.handleBackButtonClick} />
        <div id="process-body-container">
          {children}
        </div>
      </div>
    )
  }
});

module.exports = ProcessContainer;