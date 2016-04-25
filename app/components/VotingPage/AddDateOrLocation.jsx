var React = require('react');
var AddLocation = require('./AddLocation.jsx');
var AddDate = require('./AddDate.jsx');

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
      <div>
        <AddLocation 
          onSubmit={this.handleNewLocationSubmit} 
          onChange={this.handleLocationInputChange}/>
        <AddDate
          onSubmit={this.handleNewDateSubmit}
          votingAllowed={this.props.dateVotingAllowed}/>
      </div>
    )
  }
});

module.exports = AddDateOrLocation;