var React = require('react');
var DateOption = require('./DateOption.jsx');

var DateVoting = React.createClass({
  handleInputChange: function (e) {
    e.stopPropagation();
    this.props.onChange(e.target.value);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  handleVote: function (key) {
    this.props.onVote(key);
  },
  generateDateRanges: function () {
    var dateRangeList = [];
    var thisComponent = this;
    if (this.props.votingAllowed) {
      dateRangeList = this.props.dateRanges.map(function (range, index) {
        return <DateOption 
          start={range.start_date} 
          end={range.end_date}
          key={index}
          id={range.id} 
          onVote={thisComponent.handleVote}/>
      });
    } else {
      dateRangeList = this.props.dateRanges.map(function (range, index) {
        return <DateOption 
          start={range.start_date} 
          end = {range.end_date}
          key={index}
          id={range.id} 
          votingDisallowed={true}/>
      });
    }
    return dateRangeList;
  },
  render: function () {
    var dateRangeList = this.generateDateRanges();
    var hiddenIfDateVotingDisallowed = this.props.dateVotingAllowed ? {} : {"display": "none"};
    return (
      <div>
        <div id="date-options" className="row">
          {dateRangeList}
        </div>
        <div id="add-date" className="row">
          <div className="large-4 large-centered large columns text-center">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Add date..." onChange={this.handleInputChange} />
              <button className="button success">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DateVoting;