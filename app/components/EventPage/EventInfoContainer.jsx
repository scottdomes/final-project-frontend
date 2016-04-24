var React = require('react');
var EventTitle = require('./EventTitle.jsx');

var EventInfoContainer = React.createClass({
  render: function (){
    return (
      <div>
       <EventTitle eventName={this.props.eventName} />
      </div>
    )
  }
});

module.exports = EventInfoContainer;