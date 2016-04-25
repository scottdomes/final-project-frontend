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
      picturePath: '',

      locationInput: 'Test Location',
      eventName: 'Test Event Name',
      dateRanges: [],
      vote_on_date: false,
      vote_on_location: false,

      event_id: 0,
      eventCreatorID: 0,
      userIsCreator: false,
      eventParticipants: [],

      final_location_id: 0,
      final_date_id: 0,
      final_location: {campsite: {name:'Test Campsite Name'}},
      final_date: {dateRange: {start_date: 'Test Start Date', end_date: 'Test End Date'}},

      locations: [],
      locationVoteID: null,
      dateVoteID: null,
      packingList: [],

      currentUserVotedDate: false,
      currentUserVotedLocation: false,
      currentUserAddedDate: false,

      locationVoteID: null
    }
  },
  setUserDetails: function (name, id, picture_path) {
    this.setState({
      user_name: name,
      user_id: id,
      picturePath: picture_path
    });
  },
  setName: function (name) {
    this.setState({
      user_name: name
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
    var path = 'http://localhost:3000/api/events/' + this.props.params.id;
    $.getJSON(path, function (data) {
      this.setState({
        eventName: data.event.name,
        event_id: data.event.id,
        dateRanges: data.dates,
        locations: data.campsites,
        eventParticipants: data.users,
        eventCreatorID: data.event.user_id,
        vote_on_location: data.event.vote_on_location,
        vote_on_date: data.event.vote_on_date,
        final_location_id: data.event.final_location_id,
        final_date_id: data.event.final_date_id,
        currentUserVotedDate: this.checkIfVoted(data.dates, "date"),
        currentUserVotedLocation: this.checkIfVoted(data.campsites, "campsite"),
        currentUserAddedDate: this.checkIfAddedDate(data.dates)
      });
    }.bind(this))
    $.getJSON('http://localhost:3000/api/items', function (data) {
      this.setState({
        packingList: data.items,
      });
    }.bind(this));
    // $.getJSON('http://localhost:3000/api/users', function (data){
    //   var allUserInfo = data.users.map(function (user){
    //     return user.fb_id;
    //   });
    //   this.setState({
    //     allUsers: allUserInfo
    //   });
    // }.bind(this));
  },
  loadUserData: function () {
    this.setState({
      currentUserVotedDate: this.checkIfVoted(this.state.dateRanges, "date"),
      currentUserVotedLocation: this.checkIfVoted(this.state.locations, "campsite"),
    });
    this.checkIfAddedDate(this.state.dateRanges);
    this.isUserCreator();
    this.setFinalLocationAndDate(this.state.final_date_id, this.state.final_location_id)
  },
  checkIfVoted: function (array, category) {
    var thisComponent = this;
    var userVote;
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].votes.length; j++) {
        vote = array[i].votes[j];
        if (vote.user_id === thisComponent.state.user_id) {
          thisComponent.setVoteID(vote.id, category);
          userVote = vote
        }
      }
      if (userVote !== undefined) {
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
      id: id
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
    } else if (category === "date" && !action.add) {
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
  handleNewLocation: function (name) {
    var thisComponent = this;
    $.ajax({
        url: "http://localhost:3000/api/camp_sites",
        type: "POST",
        data: {
          name: name,
          event_id: thisComponent.state.event_id
        },
        success: function (res) {
          thisComponent.loadEvent();
        },
        error: function (res) {
          console.log(res);
        }
    });
  },
  handleNewDateRange: function (range) {
    var thisComponent = this;
    $.ajax({
        url: "http://localhost:3000/api/event_dates",
        type: "POST",
        data: {
          start_date: range.start_date,
          end_date: range.end_date,
          event_id: thisComponent.state.event_id
        },
        success: function (res) {
          console.log(res);
          thisComponent.loadEvent();
        },
        error: function (res) {
          console.log(res);
        }
    });
  },
  checkIfAddedDate: function (dates) {
    for (var i = 0; i < dates.length; i++) {
      if (dates[i].dateRange.user_id === this.state.user_id) {
        this.setState({
          currentUserAddedDate: true
        });
      }
    }
  },
  handleVoteEnd: function () {
    var final_location_id = this.findMostVotes("campsite"); 
    var final_date_id = this.findMostVotes("dateRange"); 

    var thisComponent = this;
    $.ajax({
        url: "http://localhost:3000/api/events/" + this.state.event_id,
        type: "PATCH",
        data: {
          final_location_id: final_location_id,
          final_date_id: final_date_id
        },
        success: function (res) {
          thisComponent.setFinalLocationAndDate(final_date_id, final_location_id);
          // thisComponent.context.router.push({
          //   pathname: 'eventDetails'
          // })
        },
        error: function (res) {
          console.log(res);
        }
    });
  },
  findMostVotes: function (category) {
    var mostVotes = 0;
    var mostVotesID;
    var array;

    if (category === "dateRange") {
      var array = this.state.dateRanges;
    } else {
      var array = this.state.locations;
    }

    for (var i = 0; i < array.length; i++) {
      if (array[i].votes.length > mostVotes) {
        mostVotes = array[i].votes.length;
        mostVotesID = array[i][category].id;
      }
    }

    return mostVotesID;
  },
  isUserCreator: function () {
    if (this.state.user_id === this.state.eventCreatorID) {
      this.setState({
        userIsCreator: true
      });
    }
  },
  setFinalLocationAndDate: function (date_id, location_id) {
    this.setState({
      final_location: this.getFinalLocation(location_id),
      final_date: this.getFinalDate(date_id)
    });
  },
  getFinalLocation: function (location_id) {
    var final_location;

    for (var i = 0; i < this.state.locations.length; i++) {
       if (this.state.locations[i].campsite.id === location_id) {
        final_location = this.state.locations[i];
       }
    }

    return final_location;
  },
  getFinalDate: function (date_id) {
    var final_date;

    for (var i = 0; i < this.state.dateRanges.length; i++) {
       if (this.state.dateRanges[i].dateRange.id === date_id) {
        final_date = this.state.dateRanges[i];
       }
    }

    return final_date;
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
              eventParticipants: this.state.eventParticipants,

              locations: this.state.locations,
              loggedin: this.state.loggedin,

              userName: this.state.user_name,
              picturePath: this.state.picturePath,

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
              currentUserVotedLocation: this.state.currentUserVotedLocation,
              onNewLocation: this.handleNewLocation,

              currentUserAddedDate: this.state.currentUserAddedDate,
              userIsCreator: this.state.userIsCreator,
              eventCreatorID: this.state.eventCreatorID,

              onNewLocation: this.handleNewLocation,
              onNewDateRange: this.handleNewDateRange,

              onVoteEnd: this.handleVoteEnd,
              finalDate: this.state.final_date,
              finalLocation: this.state.final_location
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