var React = require('react');

var LandingFBLogin = React.createClass({
  handleClick: function () {
    this.props.onLogin();
  },
  render: function () {
    return (
      <div className="row" id="fb-login">
        <div className="large-6 large-centered columns">
          <button className="button success wide"
            onClick={this.handleClick}>
            Log in with FB
          </button>
        </div> 
      </div>
    )
  }
});

module.exports = LandingFBLogin;