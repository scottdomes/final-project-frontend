var React = require('react');

var EventTitle = React.createClass({
  getInitialState: function() {
      return {
          eventInfo: {title: 'Bear Camp', startDate: 'Monday April 20', endDate: 'Friday, April 25', location: 'Golden Ears'}
      };
  },
  render: function (){
    // console.log('here')
    // console.log(this.state.eventInfo);
    return (
      <div>
        <h1>{this.state.eventInfo.title}</h1>
        <span>{this.state.eventInfo.startDate} - {this.state.eventInfo.endDate}</span>
        <h5>{this.state.eventInfo.location}</h5>
        <p> We are going camping here </p>
      </div>

    )
  }
});

module.exports = EventTitle;