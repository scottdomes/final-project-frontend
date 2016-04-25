var React = require('react');
var LandingHeader = require('../components/LandingPage/LandingHeader.jsx');
var LandingForm = require('../components/LandingPage/LandingForm.jsx');
var LandingFBLogin = require('../components/LandingPage/LandingFBLogin.jsx');
var Facebook = require('../components/Facebook.jsx');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;


var LandingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      input: ''
    }
  },
  handleNewInput: function(newInput) {
    this.props.onNewInput(newInput);
  },
  handleSubmit: function() {
    browserHistory.push({
      pathname: '/event/eventconfig'
    })
  },
  handleLogin: function () {
    this.props.onLogin();
  },
  render: function () {
    return (
      <div>
        <LandingHeader />
        { this.props.loading ? <p></p> : (this.props.loggedin ? 
          <LandingForm 
            onNewInput={this.handleNewInput} 
            onSubmit={this.handleSubmit} 
            userName={this.props.userName}
          />
          : <LandingFBLogin onLogin={this.handleLogin} />
        )}
      </div>
    )
  }
});

module.exports = LandingContainer;