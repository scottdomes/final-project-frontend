var React = require('react');
var LandingHeader = require('../components/LandingHeader.jsx');
var LandingForm = require('../components/LandingForm.jsx');
var LandingFBLogin = require('../components/LandingFBLogin.jsx');
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
  componentDidMount: function () {
    Facebook.load(document, 'script', 'facebook-jssdk');
    Facebook.initializeSDK();
  },
  handleLogin: function () {
    FB.login(function(response) {
      console.log(response);
    });
  },
  handleNewInput: function(newInput) {
    this.setState({
      input: newInput
    });
  },
  handleSubmit: function() {
    this.context.router.push({
      pathname: '/eventconfig',
      query: {
        locationInput: this.state.input
      }
    })
  },
  render: function () {
    return (
      <div>
        <LandingHeader />
        <LandingFBLogin onLogin={this.handleLogin} />
        <LandingForm onNewInput={this.handleNewInput} onSubmit={this.handleSubmit} />
      </div>
    )
  }
});

module.exports = LandingContainer;