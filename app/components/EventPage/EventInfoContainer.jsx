var React = require('react');
var EventTitle = require('./EventTitle.jsx');
var UserInfoList = require('../../components/EventPage/UserInfoList.jsx');


var EventInfoContainer = React.createClass({
  render: function (){
    return (
      <div>
      <EventTitle />
      <hr />
      <UserInfoList />
      </div>
    )
  }
});

module.exports = EventInfoContainer;