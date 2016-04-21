var React = require('react');
var PackingListContainer = require('../../components/EventPage/PackingListContainer.jsx')
var EventInfoContainer = require('../../components/EventPage/EventInfoContainer.jsx');

var EventDetails = React.createClass({
  render: function (){
    return (
      <div className='row'>
        <div className='large-6 columns'>
          <EventInfoContainer />
        </div>
        <div className='large-6 columns'>
          <PackingListContainer />
        </div>
      </div>
    )
  }
});

module.exports = EventDetails;
