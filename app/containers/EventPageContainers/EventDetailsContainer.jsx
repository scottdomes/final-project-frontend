var React = require('react');
var PackingListContainer = require('../../components/EventPage/PackingListContainer.jsx')
var EventInfoContainer = require('../../components/EventPage/EventInfoContainer.jsx');
var UserInfoList = require('../../components/EventPage/UserInfoList.jsx');

var EventDetails = React.createClass({
  render: function (){
    return (
      <div className='row'>
        <div className='large-6 columns left-column-event' id="event-left-column">
          <EventInfoContainer />
          <hr />
          <UserInfoList />

        </div>
        <div className='large-6 columns' id="event-right-column">
          <PackingListContainer />
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
