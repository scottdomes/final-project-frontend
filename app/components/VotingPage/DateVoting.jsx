var React = require('react');
var DateOption = require('./DateOption.jsx');

var DateVoting = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  handleVote: function (optionID) {
    this.props.onVote(optionID, "date");
  },
  // getDateVotes: function (dateVotes, location){
  //   return dateVotes.filter(function (vote){
  //     return vote.event_date_id === location.id ? true : false;
  //   });
  // },
  generateDateRanges: function () {
    var dateRangeList = [];
    var thisComponent = this;
    if (this.props.votingAllowed) {
      dateRangeList = this.props.dateRanges.map(function (range, index) {
        // var dateVotes = thisComponent.getDateVotes(thisComponent.props.dateVotes, location.campsite);
        return <DateOption 
          start_date={range.dateRange.start_date} 
          end_date={range.dateRange.end_date}
          key={index}
          id={range.dateRange.id} 
          votes={range.votes.length}
          dateVotes={range.votes}
          allEventParticipants={thisComponent.props.allEventParticipants}
          onVote={thisComponent.handleVote}/>
      });
    } else {
      dateRangeList = this.props.dateRanges.map(function (range, index) {
        return <DateOption 
          start_date = {range.dateRange.start_date} 
          end_date = {range.dateRange.end_date}
          key={index}
          id={range.dateRange.id} 
          votingDisallowed={true}/>
      });
    }
    return dateRangeList;
  },
  render: function () {
    var dateRangeList = this.generateDateRanges();
    return (
      <div>
        <div id="date-options" className="row">
          {dateRangeList}
        </div>
      </div>
    )
  }
});

module.exports = DateVoting;