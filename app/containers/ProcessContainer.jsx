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
  render: function () {
    var children = React.cloneElement(
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              locationInput: this.props.locationInput,
              dateRange: this.props.dateRange,
              loggedin: this.props.loggedin,
              userName: this.props.user_name,
              onLogin: this.handleLogin,
              onLogout: this.handleLogout,
              onVoteActivatorChange: this.handleVoteActivatorChange,
              onSubmitEvent: this.handleSubmitEvent
            }
        );
    return (
      <div>
        <ProgressIndicator page={this.state.pages[this.state.current_page]}/>
        <BackButton onClick={this.handleBackButtonClick} />
        {children}
      </div>
    )
  }
});

module.exports = ProcessContainer;