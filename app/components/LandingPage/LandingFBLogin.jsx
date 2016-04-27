var React = require('react');

var LandingFBLogin = React.createClass({
  handleClick: function () {
    this.props.onLogin();
  },
  render: function () {
    return (
      <div className="row" id="fb-login">
        <div className="large-5 large-centered columns">
          <button className="button success wide"
            onClick={this.handleClick}>
            Log in with Facebook
          </button>
        </div> 
      </div>
    )
  }
});

module.exports = LandingFBLogin;