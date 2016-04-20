var React = require('react');

var LandingFBLogin = React.createClass({
  handleClick: function () {
    this.props.onLogin();
  },
  render: function () {
    return (
      <button className="button success"
        onClick={this.handleClick}>
        Log in with FB
      </button>
    )
  }
});

module.exports = LandingFBLogin;