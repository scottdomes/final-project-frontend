var React = require('react');

var EventNameInput = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
  },
  handleEventTitle: function(e){
    var input = document.getElementById("event-name-input").value;
    this.props.onEventNameSubmit(input);
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="event-name-input" type="text" placeholder="Enter a name for your trip..." onChange={this.handleEventTitle}/>
      </form>
    )
  }
});

module.exports = EventNameInput;
