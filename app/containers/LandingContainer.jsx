var React = require('react');
var LandingHeader = require('../components/LandingHeader.jsx');
var LandingForm = require('../components/LandingForm.jsx');


var LandingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      input: ''
    }
  },
  handleNewInput: function(newInput) {
    this.setState({
      input: newInput
    });
  },
  handleSubmit: function() {
    this.context.router.push({
      pathname: '/eventconfig',
      query: {
        locationInput: this.state.input
      }
    })
  },
  render: function () {
    return (
      <div>
        <LandingHeader />
        <LandingForm onNewInput={this.handleNewInput} onSubmit={this.handleSubmit} />
      </div>
    )
  }
});

module.exports = LandingContainer;