var React = require('react');
var LandingHeader = require('../components/LandingHeader.jsx');
var LandingForm = require('../components/LandingForm.jsx');


var LandingContainer = React.createClass({
  handleNewInput: function(newInput) {
    this.props.onNewInput(newInput)
  },
  render: function () {
    return (
      <div>
        <LandingHeader />
        <LandingForm onNewInput={this.handleNewInput} />
      </div>
    )
  }
});

module.exports = LandingContainer;