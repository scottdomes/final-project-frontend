var React = require('react');
var DateOption = require('./DateOption.jsx');
var DatePickerWrapper = require('../DatePicker/DatePickerWrapper.jsx');
var DatePicker = require('../DatePicker/DatePicker.jsx');

var DateVoting = React.createClass({
  getInitialState: function () {
    return {
      dateSelection: {},
      displayAddDateButton: true,
      displayCalendar: false
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  handleAddOrRemoveVote: function (optionID, action) {
    this.props.onAddOrRemoveVote(optionID, action, "date");
  },
  generateDateRanges: function () {
    var dateRangeList = [];
    var thisComponent = this;
    if (this.props.votingAllowed) {
      dateRangeList = this.props.dateRanges.map(function (range, index) {
        return <DateOption 
          start_date={range.dateRange.start_date} 
          end_date={range.dateRange.end_date}
          key={index}
          id={range.dateRange.id} 
          votes={range.votes.length}
          hideVoteButton={thisComponent.props.hideVoteButton}
          onAddOrRemoveVote={thisComponent.handleAddOrRemoveVote}/>
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
  handleNewDate: function (range) {
    this.setState({
      dateSelection: {
        start_date: range.start.format('MMMM do YYYY'),
        end_date: range.end.format('MMMM do YYYY')
      }
    });
  },
  handleNewDateSubmission: function (e) {
    e.stopPropagation();
    this.props.onSubmit(this.state.dateSelection);
    this.setState({
      displayCalendar: false
    })
  },
  handleDisplayCalendarClick: function (e) {
    e.stopPropagation();
    this.setState({
      displayAddDateButton: false,
      displayCalendar: true
    })
  },
  render: function () {
    var dateRangeList = this.generateDateRanges();
    var hiddenIfDateVotingDisallowed = this.props.dateVotingAllowed ? {} : {"display": "none"};
    var displayCalendar = this.state.displayCalendar ? {"display": "block"} : {"display": "none"};
    var displayAddDateButton = this.state.displayAddDateButton ? {"display": "inline-block"} : {"display": "none"};
    return (
      <div>
        <div id="date-options" className="row">
          {dateRangeList}
        </div>
        <div id="add-date" className="row">
          <div className="large-10 large-centered large columns text-center">
            <button 
              className="button success expand-calendar wide"
              style={displayAddDateButton}
              onClick={this.handleDisplayCalendarClick}>
                Add Date
            </button>
            <div style={displayCalendar}>
              <DatePicker  
                onNewSelection={this.handleNewDate}/>
              <button 
                className="button success"
                onClick={this.handleNewDateSubmission}>
                  Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DateVoting;