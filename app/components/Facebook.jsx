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
    component.setState({loading: false});
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      component.setLoginStatus(true);
      Facebook.fetchUserName(component);
    } else if (response.status === 'not_authorized') {

    } else {

    }
  },

  fetchUserName: function (component) {
    FB.api('/me?fields=email,name,gender,picture', function(response) {
      console.log(response);
      component.setName(response.name);
      $.ajax({
        url: "http://localhost:3000/api/users",
        type: "POST",
        // data: { fb_id: response.id },
        data: { fb_id: 123 },  // For working with seed file!
        success: function (res) {
          console.log(res);
          component.setUserDetails(
            res.user.name, 
            res.user.id, 
            res.user.picture_path, 
            res.events,
            res.attendances);
          component.loadUserData();
        }
      });
    });
  },
  // fetchAllUserNames: function (usersArray){
  //  FB.api('/me?fields=email,name,gender', function(response) {
  //     console.log('FIL YOU ARE HERE')
  //   });
  // },
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