var request = require('superagent');

var Facebook = {
  load: function (d, s, id) {
    // initializeSDK();
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  },
  testAPI: function () {
    // var APP_ID = 238732356487269;
    // var APP_SECRET = f821de7d3077b607f84df531eaa36b42;
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=email,name,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response);
    });
    FB.api("/me/friends?fields=email,name,gender,picture", function (response) {
      var user_id = console.log(response.data[0].id);
    });



  }
}

module.exports = Facebook;