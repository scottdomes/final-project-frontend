var React = require('react');
var AddLocation = require('./AddLocation.jsx');
var AddDate = require('./AddDate.jsx');
var VoteActivatorButton = require('../EventConfig/VoteActivatorButton.jsx');


var AddDateOrLocation = React.createClass({
  handleNewLocationSubmit: function () {
    this.props.onLocationSubmit();
  },
  handleNewDateSubmit: function (range) {
    this.props.onDateSubmit(range);
  },
  handleLocationInputChange: function (input) {
    this.props.onChange(input);
  },
  render: function () {
    return (
      <div className='row'>
        <div className='large-8 columns text-center'>
          <AddLocation 
            onSubmit={this.handleNewLocationSubmit} 
            onChange={this.handleLocationInputChange}
            buttonDisplay={this.props.locationButtonDisplay}
            locationVotingAllowed={this.props.locationVotingAllowed}/>
        </div>
        <div className='large-4 columns'>
          <AddDate
            onSubmit={this.handleNewDateSubmit}
            votingAllowed={this.props.dateVotingAllowed}
            onDisplayCalendar={this.props.onDisplayCalendar}/>
        </div>
      </div>
    )
  }
});

module.exports = AddDateOrLocation;