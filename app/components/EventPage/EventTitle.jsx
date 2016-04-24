var React = require('react');

var EventTitle = React.createClass({
  render: function (){
    return (
      <div>
        <h1>{this.props.eventName}</h1>
        <span>{this.props.finalDate.dateRange.start_date} to {this.props.finalDate.dateRange.end_date}</span>
        <h5>Location: {this.props.finalLocation.campsite.name}</h5>
        <p> We are going camping here </p>
      </div>

    )
  }
});

module.exports = EventTitle;