var React = require('react');
var CarpoolButton = require('./CarpoolButton.jsx');

var CarpoolForm = React.createClass({
  getInitialState: function () {
    return {
      displayButton: true,
      carpoolCapacityInput: 0,
      registeredCar: false
    }
  },
  handleClick: function () {
    this.setState({
      displayButton: false
    });
  },
  handleInputChange: function (input) {
    this.setState({
      carpoolCapacityInput: input
    });
  },
  handleFormSubmit: function () {

  },
  render: function () {
    return (
      <CarpoolButton
        onClick={this.handleClick}
        displayButton={this.state.displayButton}
        onInputChange={this.handleInputChange}
        onFormSubmit={this.handleFormSubmit}/>
    )
  }
});

module.exports = CarpoolForm;