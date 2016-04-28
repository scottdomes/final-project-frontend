var React = require('react');
var generateName = require('sillyname')();

var EventNameInput = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
  },
  handleEventTitle: function(e){
    var input = document.getElementById("event-name-input").value;
    document.getElementById("event-name-holder").innerHTML = input;
    this.props.onEventNameSubmit(input);
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="event-name-input" type="text" placeholder="Give your trip a name ..." onChange={this.handleEventTitle} required />
        <em>May we suggest you call it? </em><strong>{generateName}</strong>
      </form>
    )
  }
});
/*function (){ return generateName();}()*/
module.exports = EventNameInput;
