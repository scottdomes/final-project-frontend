var $ = require('jquery');


var Facebook = {
  load: function (d, s, id) {
    // initializeSDK();
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  },
  initializeFB_SDK: function (component) {
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '238732356487269',
          cookie     : true, 
          xfbml      : true,
          version    : 'v2.6'
        });


      FB.getLoginStatus(function(response) {
          Facebook.statusChangeCallback(response, component);
      });
    }
  },
  statusChangeCallback: function (response, component)  {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      Facebook.testAPI(component);
      component.setState({
        loggedin: true
      });
      console.log("Logged in is " + component.state.loggedin);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.

    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  },
  testAPI: function (component) {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=email,name,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response.id);
      $.ajax({
        url: "http://localhost:3000/api/users",
        type: "POST",
        data: { fb_id: response.id },
        success: function (res) {
          component.setName(response.name);
          component.setUserID(res.id);
        }
      });
    });
  },
  login: function (component) {
    FB.login(function(response) {
      Facebook.statusChangeCallback(response, component);
    }, {perms:'user_friends'})
  },
  logout: function (component) {
    FB.logout(function(response) {
      component.setState({
        loggedin: false
      })
    })
  }
}

module.exports = Facebook;