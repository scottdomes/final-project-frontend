var React = require('react');
var DateOption = require('./DateOption.jsx');
var DatePickerWrapper = require('../DatePicker/DatePickerWrapper.jsx');
var DatePicker = require('../DatePicker/DatePicker.jsx');

var DateVoting = React.createClass({
  getInitialState: function () {
    return {
      dateSelection: {}
    }
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
          start_date = {range.start_date} 
          end_date = {range.end_date}
          key={index}
          id={range.id} 
          votingDisallowed={true}/>
      });
    }
    return dateRangeList;
  },
  handleNewDate: function (range) {
    this.setState({
      dateSelection: {
        start_date: range.start._d.toString(),
        end_date: range.end._d.toString()
      }
    });
  },
  handleNewDateSubmission: function (e) {
    e.stopPropagation();
    this.props.onSubmit(this.state.dateSelection);
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
          <div className="large-10 large-centered large columns text-center">
            <DatePicker  onNewSelection={this.handleNewDate}/>
            <button 
              className="button success"
              onClick={this.handleNewDateSubmission}>
                Add
            </button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DateVoting;