var React = require('react');

var Navbar = React.createClass({
  handleLogout: function () {
    this.props.onLogout();
  },
  render: function () {
    return (
      <div className="login-header">
        { this.props.loggedin ?
        <div className="loggedin-container"><p id="loggedin-indicator">Welcome back, <span>{this.props.userName}</span></p>
        <button className="button tiny" onClick={this.handleLogout}>Logout</button></div> : <span></span> }
        <div className="events-sidebar">
          <span>Events Created</span>
          {this.props.eventsCreated}
          <span>Events Attending</span>
          {this.props.eventsAttended}
        </div>
      </div>
    )
  }
});

module.exports = Navbar;