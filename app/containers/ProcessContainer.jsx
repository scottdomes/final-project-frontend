var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');

var ProcessContainer = React.createClass({
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
        <ProgressIndicator page={"eventconfig"}/>
        {children}
      </div>
    )
  }
});

module.exports = ProcessContainer;