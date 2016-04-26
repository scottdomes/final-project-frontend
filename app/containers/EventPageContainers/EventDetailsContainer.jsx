var React = require('react');
var PackingListContainer = require('../../components/EventPage/PackingListContainer.jsx')
var EventInfoContainer = require('../../components/EventPage/EventInfoContainer.jsx');
var UserInfoList = require('../../components/EventPage/UserInfoList.jsx');

var EventDetails = React.createClass({
  handleEnterNewItem: function (value){
    this.props.onEnterNewItem(value);
  },
  handleUserPacksItem: function (item, key){
    this.props.onUserPacksItem(item, key);
  },
  componentWillMount: function() {
      // console.log("Event details calling load event");
      // this.props.loadEvent();
  },
  handleGetAllUsers: function (){
    this.props.onGetAllUsers();
  },
  handleRegisterCar: function (capacity) {
    console.log(capacity);
    this.props.onRegisterCar(capacity);
  },
  render: function (){
    var creatorPicture = this.props.userIsCreator ? this.props.picturePath : '';
    var creatorName = this.props.userIsCreator ? this.props.userName : 'No creator found!';
    var allEventUsers = this.props.eventParticipants.concat(this.props.currentEventCreator);
    return (
      <div className='row'>
        <div className='large-6 columns left-column-event' id="event-left-column">
          <EventInfoContainer 
            currentEventDetails={this.props.currentEventDetails}
            finalLocation={this.props.finalLocation}
            finalDate={this.props.finalDate}
            creator={this.props.currentEventCreator}/>
          <hr />
          <UserInfoList 
            userList={this.props.eventParticipants}
            currentUserName={this.props.userName}
            onRegisterCar={this.handleRegisterCar}
            cars={this.props.currentEventCars}
            onCarpoolSignUp={this.props.onCarpoolSignUp}
            currentUserID={this.props.currentUserID}/>

        </div>
        <div className='large-6 columns' id="event-right-column">
          <PackingListContainer
            packingList={this.props.packingList} 
            onUserPacksItem={this.handleUserPacksItem}
            onEnterNewItem={this.handleEnterNewItem}
            userList={allEventUsers} />
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
