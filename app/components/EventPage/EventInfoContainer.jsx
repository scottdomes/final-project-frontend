var React = require('react');
var EventTitle = require('./EventTitle.jsx');

var EventInfoContainer = React.createClass({
  render: function (){
    return (
      <div>
       <EventTitle 
        eventName={this.props.currentEventDetails.name}
        finalDate={this.props.finalDate}
        finalLocation={this.props.finalLocation}
        creator={this.props.creator} />
      </div>
    )
  }
});

module.exports = EventInfoContainer;