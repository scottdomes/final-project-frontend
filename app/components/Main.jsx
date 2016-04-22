var React = require('react');
var Facebook = require('../components/Facebook.jsx');
var $ = require('jquery');

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return { 
      loggedin: false,
      user_name: 'Test User',
      user_id: 0,
      locationInput: 'Test Location',
      eventName: '',
      dateRange: {},
      vote_on_date: false,
      vote_on_location: false,
      event_id: 0
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
  setLoginStatus: function(boolean){
    this.setState({
      loggedin: boolean
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
    this.setState({
      dateRange: {
        start_date: range.start._d.toString(),
        end_date: range.end._d.toString()
      }
    });
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
    var eventDetails = {
      name: this.state.locationInput,
      dateRange: this.state.dateRange,
      vote_on_location: this.state.vote_on_location,
      vote_on_date: this.state.vote_on_date,
      user_id: this.state.user_id
    }
    var thisComponent = this;
    $.ajax({
        url: "http://localhost:3000/api/events",
        type: "POST",
        data: eventDetails,
        success: function (res) {
          thisComponent.setState({
            event_id: res.id,
            eventName: eventDetails.name
          });
          thisComponent.context.router.push({
            pathname: 'event/addfriends'
          })
        },
        error: function (res) {
          console.log(res);
        }
    });

  },
  handleDoneFriends: function () {
    var path = 'event/' + this.state.event_id + '/vote';
    this.context.router.push({
      pathname: path
    })
  },
  loadEvent: function () {
    var thisComponent = this;
    var path = 'http://localhost:3000/api/events/' + this.props.params.id;
    $.getJSON(path, function (data) {
      thisComponent.setState({
        eventName: data.name,
        dateRange: data.dateRange,
        vote_on_location: data.vote_on_location,
        vote_on_date: data.vote_on_date
      });
    })
  },
  render: function () {
    var children = React.cloneElement(
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              locationInput: this.state.locationInput,
              eventName: this.state.eventName,
              dateRange: this.state.dateRange,
              loggedin: this.state.loggedin,
              userName: this.state.user_name,
              onLogin: this.handleLogin,
              onLogout: this.handleLogout,
              onVoteActivatorChange: this.handleVoteActivatorChange,
              onSubmitEvent: this.handleSubmitEvent,
              onDoneFriends: this.handleDoneFriends,
              loadEvent: this.loadEvent,
              dateVotingAllowed: this.state.vote_on_date,
              locationVotingAllowed: this.state.vote_on_location
            }
        );
    return (
      <div id="background">
        <div id="background-overlay">
          { this.state.loggedin ? <p id="loggedin-indicator" className="right">Welcome back, {this.state.user_name}</p> : <p></p> }
          {children}
        </div>
      </div>
    )
  }
});

module.exports = Main;