var React = require('react');
var PackingListContainer = require('../../components/EventPage/PackingListContainer.jsx')
var EventInfoContainer = require('../../components/EventPage/EventInfoContainer.jsx');
// var SideBarContainer = require('../../components/EventPage/SideBarContainer.jsx');
var SideBarButton = require('../../components/EventPage/SideBarButton.jsx');


var EventDetails = React.createClass({
  render: function (){
    return (
      <div>
        <SideBarButton />
        <div className='row'>
          <div className='large-6 columns left-column-event' >
            <EventInfoContainer />
          </div>
          <div className='large-6 columns'>
            <PackingListContainer />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
