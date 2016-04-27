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
    var boolean = this.state.displayCalendar ? false : true;
    this.setState({
      displayCalendar: boolean
    })
  },
  render: function () {
    var displayCalendar = this.state.displayCalendar ? {"display": "block"} : {"display": "none"};
    var hideAddDateButton = this.state.hideAddDateButton ? {"display": "none"} : {"display": "inline-block"} ;
    var hiddenIfDateVotingDisallowed = this.props.votingAllowed ? {} : {"display": "none"}; 
    var buttonText = this.state.displayCalendar ? "Close" : "Add Date";   
    return (
      <div id="add-date" className="row">
        <div className="large-10 large-centered large columns text-center">
          <button 
            className="button success expand-calendar wide"
            style={hiddenIfDateVotingDisallowed}
            onClick={this.handleDisplayCalendarClick}>
              {buttonText}
          </button>
          <div style={displayCalendar}>
            <DatePicker  
              onNewSelection={this.handleNewDate}/>
            <button 
              className="button success add-date-button"
              onClick={this.handleNewDateSubmission}>
                Submit Date
            </button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AddDate;