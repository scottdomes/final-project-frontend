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
      input: '',
      loggedin: false
    }
  },
  initializeFB_SDK: function () {
    var thisComponent = this;
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '238732356487269',
          cookie     : true, 
          xfbml      : true,
          version    : 'v2.6'
        });

      FB.getLoginStatus(function(response) {
          thisComponent.statusChangeCallback(response);
      });
    }
  },
  statusChangeCallback: function (response)  {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      Facebook.testAPI();
      this.setState({
        loggedin: true
      });
      console.log("Logged in is " + this.state.loggedin);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.

    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  },
  componentDidMount: function () {
    Facebook.load(document, 'script', 'facebook-jssdk');
    this.initializeFB_SDK();
  },
  handleLogin: function () {
    var thisComponent = this;
    FB.login(function(response) {
      thisComponent.statusChangeCallback(response);
    });
  },
  handleLogout: function () {
    var thisComponent = this;
    FB.logout(function(response) {
      thisComponent.setState({
        loggedin: false
      })
    })
  },
  handleNewInput: function(newInput) {
    this.setState({
      input: newInput
    });
  },
  handleSubmit: function() {
    this.context.router.push({
      pathname: '/addfriends',
      query: {
        locationInput: this.state.input
      }
    })
  },
  render: function () {
    return (
      <div>
        <LandingHeader />
        { this.state.loggedin ? 
          <LandingForm onNewInput={this.handleNewInput} onSubmit={this.handleSubmit} />
          : <LandingFBLogin onLogin={this.handleLogin} />
        }
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
});

module.exports = LandingContainer;