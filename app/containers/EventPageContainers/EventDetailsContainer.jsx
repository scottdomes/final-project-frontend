var React = require('react');
var PackingListContainer = require('../../components/EventPage/PackingListContainer.jsx')
var EventInfoContainer = require('../../components/EventPage/EventInfoContainer.jsx');
var UserInfoList = require('../../components/EventPage/UserInfoList.jsx');

var EventDetails = React.createClass({
  handleEnterNewItem: function (value, listType){
    this.props.onEnterNewItem(value, listType);
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
  handleDeleteEvent: function (e) {
    e.stopPropagation();
    this.props.onDeleteEvent();
  },
  render: function (){
    var creatorPicture = this.props.userIsCreator ? this.props.picturePath : '';
    var creatorName = this.props.userIsCreator ? this.props.userName : 'No creator found!';
    var allEventUsers = this.props.eventParticipants.concat(this.props.currentEventCreator);
    return (
      <div id="event-details-wrapper">
        <div className='row event-details-image-row'>
          <div className='large-6 columns event-details-image-left event-details-image'>
            <h1>{this.props.currentEventDetails.name}</h1>
            <p>{this.props.finalDate.dateRange.start_date} to {this.props.finalDate.dateRange.end_date}</p>
          </div>
          <div className='large-6 columns event-details-image-right event-details-image'>
            { this.props.eventCreatorID === this.props.currentUserID 
              ? <button 
                  className='button alert tiny' 
                  style={{"float": "right"}}
                  onClick={this.handleDeleteEvent}>
                    Delete Event
                </button>
              : <div></div> 
            }
            <h1>{this.props.finalLocation.campsite.name}</h1>
          </div>
        </div>
        <div className='row event-details-text-row'>
          <div className='large-8 columns left-column-event' id="event-left-column">
            <UserInfoList 
              userList={this.props.eventParticipants}
              currentUserName={this.props.userName}
              onRegisterCar={this.handleRegisterCar}
              cars={this.props.currentEventCars}
              onCarpoolSignUp={this.props.onCarpoolSignUp}
              onLeaveCar={this.props.onLeaveCar}
              currentUserID={this.props.currentUserID}
              currentEventDetails={this.props.currentEventDetails}
              currentUserCar={this.props.currentUserCar}/>
              <hr />
          </div>
          <div className='large-4 columns' id="event-right-column">
            <PackingListContainer
              packingList={this.props.packingList} 
              onUserPacksItem={this.handleUserPacksItem}
              onEnterNewItem={this.handleEnterNewItem}
              userList={allEventUsers} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
