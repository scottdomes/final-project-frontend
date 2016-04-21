var React = require('react');
var LandingHeader = require('../components/LandingPage/LandingHeader.jsx');
var LandingForm = require('../components/LandingPage/LandingForm.jsx');
var LandingFBLogin = require('../components/LandingPage/LandingFBLogin.jsx');
var Facebook = require('../components/Facebook.jsx');


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
    this.context.router.push({
      pathname: '/eventconfig'
    })
  },
  handleLogin: function () {
    this.props.onLogin();
  },
  handleLogout: function () {
    this.props.onLogout();
  },
  render: function () {
    return (
      <div>
        <LandingHeader />
        { this.props.loggedin ? 
          <LandingForm 
            onNewInput={this.handleNewInput} 
            onSubmit={this.handleSubmit} 
            userName={this.props.userName}
          />
          : <LandingFBLogin onLogin={this.handleLogin} />
        }
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
});

module.exports = LandingContainer;