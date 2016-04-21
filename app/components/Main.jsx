var React = require('react');
var Facebook = require('../components/Facebook.jsx');
var $ = require('jquery');

var Main = React.createClass({
  getInitialState: function () {
    return { 
      loggedin: false,
      user_name: '',
      locationInput: '',
      dateRange: {}
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
      this.testAPI();
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
  testAPI: function () {
    var thisComponent = this;
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=email,name,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response.id);
      $.ajax({
        url: "http://localhost:3000/api/users",
        type: "POST",
        data: { fb_id: response.id },
        success: function (res) {
          thisComponent.setName(response.name);
        }
      });
    });

    FB.api('/me/invitable_friends', function(response) {
      console.log("Taggable friends: ");
      console.log(response);
    });

  },
  setName: function (name) {
    this.setState({
      user_name: name
    });
  },
  handleLogin: function () {
    var thisComponent = this;
    FB.login(function(response) {
      thisComponent.statusChangeCallback(response);
    }, {perms:'user_friends'});
  },
  handleLogout: function () {
    var thisComponent = this;
    FB.logout(function(response) {
      thisComponent.setState({
        loggedin: false
      })
    })
  },
  componentDidMount: function () {
    Facebook.load(document, 'script', 'facebook-jssdk');
    this.initializeFB_SDK();
  },
  handleNewInput: function (newInput) {
    this.setState({
      locationInput: newInput
    });
  },
  handleNewDate: function(range) {
    console.log(range);
    this.setState({
      dateRange: {
        start: range.start._d.toString(),
        end: range.end._d.toString()
      }
    });
    console.log(this.state.dateRange);
  },
  render: function () {
    var children = React.cloneElement(
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              locationInput: this.state.locationInput,
              dateRange: this.state.dateRange,
              loggedin: this.state.loggedin,
              userName: this.state.user_name,
              onLogin: this.handleLogin,
              onLogout: this.handleLogout
            }
        );
    return (
      <div id="body-overlay">
        {children}
      </div>
    )
  }
});

module.exports = Main;