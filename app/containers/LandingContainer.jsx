var React = require('react');
var LandingHeader = require('../components/LandingHeader.jsx');
var LandingForm = require('../components/LandingForm.jsx');
var LandingFBLogin = require('../components/LandingFBLogin.jsx');
var loadFB = require('../components/loadFB.jsx');


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
    loadFB(document, 'script', 'facebook-jssdk');
  },
  handleLogin: function () {
    console.log("CLICK");
    FB.getLoginStatus(function(response) {
      console.log("HEY");
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