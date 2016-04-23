var React = require('react');
var PackingListContainer = require('../../components/EventPage/PackingListContainer.jsx')
var EventInfoContainer = require('../../components/EventPage/EventInfoContainer.jsx');
var UserInfoList = require('../../components/EventPage/UserInfoList.jsx');

var EventDetails = React.createClass({
  handleEnterNewItem: function (value){
    this.props.onEnterNewItem(value);
  },
  handleUserPacksItem: function (value){
    this.props.onUserPacksItem(value);
  },
  render: function (){
    return (
      <div className='row'>
        <div className='large-6 columns left-column-event' id="event-left-column">
          <EventInfoContainer />
          <hr />
          <UserInfoList />

        </div>
        <div className='large-6 columns' id="event-right-column">
          <PackingListContainer 
            onUserPacksItem={this.handleEnterNewItem}
            onEnterNewItem={this.handleEnterNewItem} />
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
