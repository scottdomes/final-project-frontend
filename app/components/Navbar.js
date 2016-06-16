var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Navbar = React.createClass({
  handleLogout: function () {
    this.props.onLogout();
  },
  render: function () {
    return (
      <div>
        <div className="login-header">
          { this.props.loggedin ?
          <div className="loggedin-container"><Link className="sidebar-home-link"
          to={'/'}>
            <i className="fa fa-home" aria-hidden="true"></i>
        </Link><span id="loggedin-indicator">Welcome, <span>{this.props.userName}</span></span>
          <button className="button tiny" onClick={this.handleLogout}>Logout</button></div> : <span></span> }
        </div>
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