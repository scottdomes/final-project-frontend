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
  handleSubmitEvent: function () {
    this.props.onSubmitEvent();
  },
  handleDoneFriends: function () {
    this.props.onDoneFriends();
  },
  callEventLoad: function () {
    this.props.loadEvent();
  },
  handleAddVote: function (target, type) {
    this.props.onAddVote(target, type);
  },
  render: function () {
    var children = React.cloneElement(
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              locationInput: this.props.locationInput,
              eventName: this.props.eventName,
              dateRange: this.props.dateRange,
              loggedin: this.props.loggedin,
              userName: this.props.userName,
              onLogin: this.handleLogin,
              onLogout: this.handleLogout,
              onVoteActivatorChange: this.handleVoteActivatorChange,
              onSubmitEvent: this.handleSubmitEvent,
              onDoneFriends: this.handleDoneFriends,
              loadEvent: this.callEventLoad,
              dateVotingAllowed: this.props.dateVotingAllowed,
              locationVotingAllowed: this.props.locationVotingAllowed,
              onAddVote: this.handleAddVote
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