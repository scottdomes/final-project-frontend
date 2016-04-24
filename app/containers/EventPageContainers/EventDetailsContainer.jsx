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
    // if (this.props.eventName === '') {
      console.log("Calling load event in Event Details Container");
      this.props.loadEvent();
    // }
  },
  handleGetAllUsers: function (){
    this.props.onGetAllUsers();
  },
  render: function (){
    // packingList={this.state.packingList} 
    console.log('Event Details Called Props')
    console.log(this.props);
    console.log(this.props.packingList);
    console.log('kamikaze');
    console.log(this.props)

    return (
      <div className='row'>
        <div className='large-6 columns left-column-event' id="event-left-column">
          <EventInfoContainer 
            eventName={this.props.eventName}/>
          <hr />
          <UserInfoList allUsers={this.props.allUsers}/>

        </div>
        <div className='large-6 columns' id="event-right-column">
          <PackingListContainer
            packingList={this.props.packingList} 
            onUserPacksItem={this.handleUserPacksItem}
            onEnterNewItem={this.handleEnterNewItem} />
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
