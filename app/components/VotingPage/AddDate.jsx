var React = require('react');
var DatePickerWrapper = require('../DatePicker/DatePickerWrapper.jsx');
var DatePicker = require('../DatePicker/DatePicker.jsx');


var AddDate = React.createClass({
  getInitialState: function () {
    return {
      dateSelection: {},
      hideAddDateButton: false,
      displayCalendar: false
    }
  },
  handleNewDate: function (range) {
    this.setState({
      dateSelection: {
        start_date: range.start.format('MMMM Do YYYY'),
        end_date: range.end.format('MMMM Do YYYY')
      }
    });
  },
  handleNewDateSubmission: function (e) {
    e.stopPropagation();
    this.props.onSubmit(this.state.dateSelection);
    this.setState({
      hideAddDateButton: false,
      displayCalendar: false
    })
  },
  handleDisplayCalendarClick: function (e) {
    e.stopPropagation();
    this.setState({
      hideAddDateButton: true,
      displayCalendar: true
    })
  },
  render: function () {
    var displayCalendar = this.state.displayCalendar ? {"display": "block"} : {"display": "none"};
    var hideAddDateButton = this.state.hideAddDateButton ? {"display": "none"} : {"display": "inline-block"} ;
    var hiddenIfDateVotingDisallowed = this.props.votingAllowed ? {} : {"display": "none"};    
    return (
      <div id="add-date" className="row">
        <div className="large-10 large-centered large columns text-center">
          <button 
            className="button success expand-calendar wide"
            style={hiddenIfDateVotingDisallowed}
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
    )
  }
});

module.exports = AddDate;