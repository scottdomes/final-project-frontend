var React = require('react');
var Facebook = require('../components/Facebook.jsx');
var $ = require('jquery');
var EventLink = require('../components/EventLink.jsx');
var Navbar = require('../components/Navbar.jsx');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TransitionContainer = require('react-page-transitions');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Menu = require('react-burger-menu').slide;

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      loading: false,
      loggedin: false,
      currentEventDetails: {
        name: 'Loading...',
        final_date_id: 0,
        final_location_id: 0,
        id: 0
      },
      final_location: {campsite: {id: 0, name:'Test Campsite Name'}},
      final_date: {dateRange: {id: 0, start_date: 'Test Start Date', end_date: 'Test End Date'}},


      user_name: 'Test User',
      user_id: 0,
      picturePath: '',

      locationInput: 'Test Location',
      dateRanges: [],
      vote_on_date: false,
      vote_on_location: false,

      event_id: 0,
      eventCreatorID: 0,
      userIsCreator: false,
      eventParticipants: [],
      currentEventCreator: {name: 'Loading', picture_path: ''},

      userCreatedEvents: [],
      userAttendedEvents: [],

      final_location_id: 0,
      final_date_id: 0,

      locations: [],
      locationVoteID: null,
      dateVoteID: null,
      packingList: [],

      currentUserVotedDate: false,
      currentUserVotedLocation: false,
      currentUserAddedDate: false,

      locationVoteID: null,
      isOpen: false
    }
  },
  setUserDetails: function (name, id, picture_path, events, attendances) {
    this.setState({
      user_name: name,
      user_id: id,
      picturePath: picture_path,
      userCreatedEvents: events,
      userAttendedEvents: attendances
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
  handleSubmitEvent: function (eventDetails) {
    //change eventname to event details and pull name
    //then fix up
    var votingPhase = eventDetails.vote_on_location || eventDetails.vote_on_date
   
    var eventDetails = {
      name: eventDetails.eventName,
      campsite_name: this.state.locationInput,
      dateRange: this.state.dateRange,
      vote_on_location: eventDetails.vote_on_location,
      vote_on_date: eventDetails.vote_on_date,
      voting_phase: votingPhase,
      user_id: this.state.user_id
    }
    // var current_event_details = {
    //   name: eventDetails.name,
    //   vote_on_location: eventDetails.vote_on_location,
    //   vote_on_date: eventDetails.vote_on_date,
    //   voting_phase: votingPhase
    // }
    var thisComponent = this;
    $.ajax({
        url: "http://localhost:3000/api/events",
        type: "POST",
        data: eventDetails,
        success: function (res) {
          thisComponent.setState({
            event_id: res.id,
            eventName: eventDetails.name,
            vote_on_location: eventDetails.vote_on_location,
            vote_on_date: eventDetails.vote_on_date,
            currentEventDetails: eventDetails
          });
          browserHistory.replace({
            pathname: '/event/addfriends'
          })
        },
        error: function (res) {
          console.log(res);
        }
    });

  },
  handleDoneFriends: function () {
    // if (this.state.vote_on_location || this.state.vote_on_date) {
    //   var path = 'event/' + this.state.event_id + '/vote';
    // } else {
    //   var path = 'eventdetails/' + this.state.event_id;
    //   this.loadEvent(this.state.event_id)
    // }

    var path = '/event/' + this.state.event_id
    browserHistory.replace({
      pathname: path
    })
  },
  loadEvent: function (event_id) {
    console.log('load event passed ' + event_id);
    var eventID = event_id ? event_id : this.props.params.id;
    var path = 'http://localhost:3000/api/events/' + eventID;
    $.getJSON(path)
    .then(function (data) {
      console.log('load event called');
      this.setState({
        currentEventDetails: data.details,
        currentEventCreator: data.creator,
        eventName: data.details.name,
        event_id: data.details.id,
        dateRanges: data.dates,
        locations: data.campsites,
        eventParticipants: data.users,
        eventCreatorID: data.details.user_id,
        vote_on_location: data.details.vote_on_location,
        vote_on_date: data.details.vote_on_date,
        final_location_id: data.details.final_location_id,
        final_date_id: data.details.final_date_id,
        currentUserVotedDate: this.checkIfVoted(data.dates, "date"),
        currentUserVotedLocation: this.checkIfVoted(data.campsites, "campsite"),
        currentUserAddedDate: this.checkIfAddedDate(data.dates),
      });
      this.isUserCreator();
      this.setFinalLocationAndDate(this.state.final_date_id, this.state.final_location_id)

      return $.getJSON('http://localhost:3000/api/items/' + this.state.event_id)

    }.bind(this))
    .then(function (data) {
      this.setState({
        packingList: data,
      });
    }.bind(this));
    
    ////!!!!
    ///OLD LOAD EVENT BELOW
    //OLD IMPLEMENTATION
    // var eventID = event_id ? event_id : this.props.params.id;
    // var path = 'http://localhost:3000/api/events/' + eventID;
    // $.getJSON(path, function (data) {
    //   console.log('load event called');
    //   console.log(data);
    //   console.log('event id is')
    //   console.log(event_id);
    //   this.setState({
    //     currentEventDetails: data.details,
    //     currentEventCreator: data.creator,
    //     eventName: data.details.name,
    //     event_id: data.details.id,
    //     dateRanges: data.dates,
    //     locations: data.campsites,
    //     eventParticipants: data.users,
    //     eventCreatorID: data.details.user_id,
    //     vote_on_location: data.details.vote_on_location,
    //     vote_on_date: data.details.vote_on_date,
    //     final_location_id: data.details.final_location_id,
    //     final_date_id: data.details.final_date_id,
    //     currentUserVotedDate: this.checkIfVoted(data.dates, "date"),
    //     currentUserVotedLocation: this.checkIfVoted(data.campsites, "campsite"),
    //     currentUserAddedDate: this.checkIfAddedDate(data.dates)
    //   });
    //   this.isUserCreator();
    //   this.setFinalLocationAndDate(this.state.final_date_id, this.state.final_location_id)
    
    //   $.getJSON('http://localhost:3000/api/items/' + this.state.event_id, function (data) {
    //     console.log('in api item call')
    //     console.log('event id is')
    //     console.log(this.state.event_id);
    //     console.log('data is ')
    //     console.log(data)
    //     this.setState({
    //       packingList: data.items,
    //     });
    //   }.bind(this));
    // }.bind(this));
    ////!!!
    //OLD LOAD EVENT ABOVE


    ///THIS IS STUFF DOESN"T MATTER HERE YOU CAN IGNORE FOR NOW
    // put this inside ajax call or else!
    // $.getJSON('http://localhost:3000/api/items/' + this.state.event_id, function (data) {
    //   console.log('in api item call')
    //   console.log('event id is')
    //   console.log(this.state.event_id);
    //   console.log('data is ')
    //   console.log(data)
    //   this.setState({
    //     packingList: data.items,
    //   });
    // }.bind(this));

    //KEEP THIS HERE, MAY NEED TO REIMPLEMENT
    // $.getJSON('http://localhost:3000/api/items', function (data) {
    //   this.setState({
    //     packingList: data.items,
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
  handleEnterNewItem: function (value, listType){
    $.ajax({
      url: 'http://localhost:3000/api/items',
      method: 'POST',
      data: {
        label: value,
        event_id: this.state.event_id,
        list_type: listType
      },
      success: function (res) {
        var newItem = res;
        var currentPackingList = this.state.packingList;
        var newPackingList = currentPackingList.concat(newItem);
        this.setState({
           packingList: newPackingList
        });
      }.bind(this),
      error: function (res) {
        console.log(res);
      }
    });
  },
  handleUserPacksItem: function (item, key){
    var packedBy = item.user_id ? null : this.state.user_id;
    $.ajax({
      url: 'http://localhost:3000/api/items/' + item.id,
      method: 'PUT',
      data: {
        user_id: packedBy
      },
      success: function (res) {
        var newItem = res;
        var currentPackingList = this.state.packingList;
        if (res.list_type === 'public') {
          currentPackingList.publicPackingList[key] = newItem;
        } else {
          currentPackingList.privatePackingList[key] = newItem;
        }
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
          final_date_id: final_date_id,
          voting_phase: false
        },
        success: function (res) {
          thisComponent.setFinalLocationAndDate(final_date_id, final_location_id);
          thisComponent.loadEvent();
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
      if (array[i].votes.length >= mostVotes) {
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
    var final_location = {campsite: {id: 0, name:'Test Campsite Name'}};

    for (var i = 0; i < this.state.locations.length; i++) {
       if (this.state.locations[i].campsite.id === location_id) {
        final_location = this.state.locations[i];
       }
    }

    return final_location;
  },
  getFinalDate: function (date_id) {
    var final_date = {dateRange: {id: 0, start_date: 'Test Start Date', end_date: 'Test End Date'}};

    for (var i = 0; i < this.state.dateRanges.length; i++) {
       if (this.state.dateRanges[i].dateRange.id === date_id) {
        final_date = this.state.dateRanges[i];
       }
    }

    return final_date;
  },
  handleExpandSidebar: function () {
    console.log("OPEN SIDEBAR");
    isOpen = this.state.isOpen ? false : true;
    this.setState({
      isOpen: isOpen
    });
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

              currentEventDetails: this.state.currentEventDetails,
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
              currentEventCreator: this.state.currentEventCreator,

              event_id: this.state.event_id,

              onNewLocation: this.handleNewLocation,
              onNewDateRange: this.handleNewDateRange,

              onVoteEnd: this.handleVoteEnd,
              finalDate: this.state.final_date,
              finalLocation: this.state.final_location,
              key: this.props.location.pathname
            }
        );
    var eventsCreated = this.state.userCreatedEvents.map((event, index) => {
      return <EventLink
                eventDetails={event}
                key={index}/>
    });
    var eventsAttended = this.state.userAttendedEvents.map((event, index) => {
      return <EventLink
                eventDetails={event}
                key={index}/>
    });
     var sidebarContent = <Navbar 
              loggedin={this.state.loggedin}
              eventsCreated={eventsCreated}
              eventsAttended={eventsAttended}
              userName={this.state.user_name}
              onLogout={this.handleLogout}/>;
    return (
      <div id="background">
        <div id="background-overlay">
          <ReactCSSTransitionGroup
              transitionName="appear"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
            <Menu 
              isOpen={this.state.isOpen}
              width={300}
              noOverlay>
              <Navbar 
                loggedin={this.state.loggedin}
                eventsCreated={eventsCreated}
                eventsAttended={eventsAttended}
                userName={this.state.user_name}
                onLogout={this.handleLogout}/>
            </Menu>
             <button id="open-sidebar-button" 
                className="button success" 
                onClick={this.handleExpandSidebar}>
                  Open Sidebar
            </button>        
            {children}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
});

module.exports = Main;
