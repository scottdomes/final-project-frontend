var React = require('react');
var EventTitle = require('./EventTitle.jsx');

var EventInfoContainer = React.createClass({
  render: function (){
    return (
      <div>
       <EventTitle />
      </div>
    )
  }
});

module.exports = EventInfoContainer;