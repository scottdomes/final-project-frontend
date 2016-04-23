var React = require('react');
var Facebook = require('../components/Facebook.jsx');
var $ = require('jquery');

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      loading: true,
      loggedin: false,
      user_name: 'Test User',
      user_id: 0,
      locationInput: 'Test Location',
      eventName: '',
      dateRanges: [],
      vote_on_date: false,
      vote_on_location: false,
      event_id: 0,
      locationVoteID: null,
      dateVoteID: null,
      packingList: [],
      currentUserVotedDate: false,
      currentUserVotedLocation: false,
      locationVoteID: null
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
        start_date: range.start.format('MMMM Do YYYY'),
        end_date: range.end.format('MMMM Do YYYY')
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
  handleSubmitEvent: function (eventName) {
    var eventDetails = {
      name: eventName,
      campsite_name: this.state.locationInput,
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
    var thisComponent = this; //Scott this is hacky, do .bind(this) at end instead
    var path = 'http://localhost:3000/api/events/' + this.props.params.id;
    $.getJSON(path, function (data) {
      thisComponent.setState({
        eventName: data.event.name,
        dateRanges: data.dates,
        vote_on_location: data.event.vote_on_location,
        vote_on_date: data.event.vote_on_date,
        currentUserVotedDate: thisComponent.checkIfVoted(data.dates),
        currentUserVotedLocation: thisComponent.checkIfVoted(data.campsites)
      });
    })
    $.getJSON('http://localhost:3000/api/items', function (data) {
      console.log('Main Showing Data and State')
      console.log(data)
      this.setState({
        packingList: data.items,
      });
    }.bind(this));
    console.log(this.state);
  },
  checkIfVoted: function (array) {
    var thisComponent = this;
    for (var i = 0; i < array.length; i++) {
      var voted = array[i].votes.filter(function (vote) {
        return vote.user_id === thisComponent.state.user_id
      });
      if (voted !== undefined) {
        return true
      }
    }
  },

  handleEnterNewItem: function (value){
    //!!! Edit to provide Item info, name, quantity, event_id
    console.log('Main handleEnterNewItem');
    console.log(value);
    $.ajax({
      url: 'http://localhost:3000/api/items',
      method: 'POST',
      data: {
        label: value,
        event_id: this.state.event_id
      },
      success: function (res) {
        console.log('Successfully created an Item');
        console.log(res);

         // var newItem = {label: value, user_id: this.state.user_id}
         var newItem = res;
         var currentPackingList = this.state.packingList;
         var newPackingList = currentPackingList.concat(newItem);
        this.setState({
           packingList: newPackingList
        });
      }.bind(this),
      error: function (res) {
        console.log('Failure no Item Created');
        console.log(res);
      }
    });
  },
  handleUserPacksItem: function (item, key){
    //!!! Edit to provide Item info, user_id of who packing
    console.log('Main handleUserPacksItem');
    var packedBy = item.user_id ? null : this.state.user_id;
    $.ajax({
      url: 'http://localhost:3000/api/items/' + item.id,
      method: 'PUT',
      data: {
        user_id: packedBy
      },
      success: function (res) {
        console.log('Item successfully packed!');
        console.log(res);
        var newItem = res;
        var currentPackingList = this.state.packingList;
        currentPackingList[key] = newItem;
        this.setState({
          packingList: currentPackingList
        });
      }.bind(this),
      error: function (res) {
        console.log('Failure To Pack Item');
      }
    })
  },
  handleAddOrRemoveVote: function (action, category, id) {
    // Category is a string, either "campsite" or "date"
    var vote = {
      user_id: this.state.user_id,
      event_date_id: id
    };
    var thisComponent = this;
    var url = this.constructVoteURL(action, category);
    var action = action.add ? "POST" : "DELETE";

    $.ajax({
        url: url,
        type: action,
        data: vote,
        success: function (res) {
          console.log(res);
          thisComponent.loadEvent();
        },
        error: function (res) {
          console.log(res);
        }
    });
  },
  constructVoteURL: function (action, category) {
    if (category === "campsite" && action.add) {
      return "http://localhost:3000/api/campsite_votes/";
    } else if (category === "date" && action.add) {
      return "http://localhost:3000/api/date_votes/";
    } else if (category === "campsite" && !action.add) {
      return "http://localhost:3000/api/campsite_votes/" + this.state.locationVoteID;
    } else if (category === "add" && !action.add) {
      return "http://localhost:3000/api/date_votes/" + this.state.dateVoteID;
    }
  },
  setVoteID: function (id, category) {
    if (category === "date") {
      this.setState({
        dateVoteID: id
      });
    } else if (category === "campsite") {
      this.setState({
        locationVoteID: id
      });
    }
  },
  render: function () {
    var children = React.cloneElement(
      //refactor to put all states uptop and function references below
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              loading: this.state.loading,
              locationInput: this.state.locationInput,
              eventName: this.state.eventName,
              dateRanges: this.state.dateRanges,
              loggedin: this.state.loggedin,
              userName: this.state.user_name,
              packingList: this.state.packingList,
              onLogin: this.handleLogin,
              onLogout: this.handleLogout,
              onVoteActivatorChange: this.handleVoteActivatorChange,
              onSubmitEvent: this.handleSubmitEvent,
              onDoneFriends: this.handleDoneFriends,
              loadEvent: this.loadEvent,
              dateVotingAllowed: this.state.vote_on_date,
              locationVotingAllowed: this.state.vote_on_location,
              onEnterNewItem: this.handleEnterNewItem,
              onUserPacksItem: this.handleUserPacksItem,
              onAddOrRemoveVote: this.handleAddOrRemoveVote,
              currentUserVotedDate: this.state.currentUserVotedDate,
              currentUserVotedLocation: this.state.currentUserVotedLocation
            }
        );
    return (
      <div id="background">
        <div id="background-overlay">
          { this.state.loggedin ? 
          <div className="loggedin-container"><p id="loggedin-indicator" className="right">Welcome back, {this.state.user_name}</p>
          <button className="button tiny secondary" onClick={this.handleLogout}>Logout</button></div> : <span></span> }
          {children}
        </div>
      </div>
    )
  }
});

module.exports = Main;