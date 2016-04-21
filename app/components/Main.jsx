var React = require('react');
var Facebook = require('../components/Facebook.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return { 
      loggedin: false,
      user_name: '',
      locationInput: '',
      dateRange: {}
    }
  },
  setName: function (name) {
    this.setState({
      user_name: name
    });
  },
  handleLogin: function () {
    Facebook.login(this);
  },
  handleLogout: function () {
    Facebook.logout(this);
  },
  componentDidMount: function () {
    Facebook.load(document, 'script', 'facebook-jssdk');
    Facebook.initializeFB_SDK(this);
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
        <p id="loggedin-indicator">Logged in as {this.state.user_name}</p>
        {children}
      </div>
    )
  }
});

module.exports = Main;