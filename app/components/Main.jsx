var React = require('react');
var Facebook = require('../components/Facebook.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return { 
      loggedin: false,
      user_name: '',
      user_id: 0,
      locationInput: '',
      dateRange: {},
      vote_on_date: false,
      vote_on_location: false
    }
  },
  setName: function (name) {
    this.setState({
      user_name: name
    });
  },
  setUserID: function (id) {
    this.setState({
      user_id: id
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
  handleVoteActivatorChange: function (selectionStatus, label) {
    if (label === "Date" && selectionStatus === "selected"){
      this.setState({ vote_on_date: true });
    }
    else if (label === "Date" && selectionStatus === "deselected") {
      this.setState({ vote_on_date: false });
    } else if (label === "Location" && selectionStatus === "selected"){
      this.setState({ vote_on_location: true });
    }
    else if (label === "Location" && selectionStatus === "deselected") {
      this.setState({ vote_on_location: false });
    }
  },
  handleSubmitEvent: function () {
    var event = {
      name: this.state.locationInput,
      dateRange: this.state.dateRange,
      vote_on_location: this.state.vote_on_location,
      vote_on_date: this.state.vote_on_date,
      user_id: this.state.user_id
    }
    console.log(event);
    $.ajax({
        url: "http://localhost:3000/api/events",
        type: "POST",
        data: event,
        success: function (res) {
          if (res.data.errors.length === 0) {
            console.log(res);
            // this.context.router.push({
            //   pathname: '/addfriends'
            // })
          } else {
            console.log(res);
          }
        }
    });

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
              onLogout: this.handleLogout,
              onVoteActivatorChange: this.handleVoteActivatorChange,
              onSubmitEvent: this.handleSubmitEvent
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