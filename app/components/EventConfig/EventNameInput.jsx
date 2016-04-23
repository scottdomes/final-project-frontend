var React = require('react');

var EventNameInput = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var input = document.getElementById("event-name-input").value;
    this.props.onEventNameSubmit(input);
  },
  render: function () {
    return (
      <div className="row">
        <div className="large-6 large columns large-centered">
          <form onSubmit={this.handleSubmit}>
            <input id="event-name-input" type="text" placeholder="Enter a name for your trip..."/>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = EventNameInput;