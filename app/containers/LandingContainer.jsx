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
      loading: true,
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

    this.setState({
      loading: false
    });

    if (response.status === 'connected') {
      // Logged into your app and Facebook.

      var accessToken = response.authResponse.accessToken;
      var userID = response.authResponse.userID;
      console.log(accessToken);

      // var APP_ID = 238732356487269;
      // var APP_SECRET = f821de7d3077b607f84df531eaa36b42;
    FB.api('/me?fields=email,name,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response);
      var name = response.name;

      FB.api("/me/friends?fields=email,name,gender,picture", function (response) {

        var user_id = console.log(response.data[0].id);
          FB.api(user_id + "/notifications?access_token=238732356487269|f821de7d3077b607f84df531eaa36b42" ,"post", {href: "http://localhost:3000", template:"hello world! by " + name + "!"}, function(response){
            console.log(response);
        });
      });

    });

      // Facebook.testAPI();
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
        { 
          this.state.loading ? <p>loading</p> : (this.state.loggedin ? 
          <LandingForm onNewInput={this.handleNewInput} onSubmit={this.handleSubmit} />
          : <LandingFBLogin onLogin={this.handleLogin} />)
        }
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
});

module.exports = LandingContainer;