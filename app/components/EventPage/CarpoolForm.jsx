var React = require('react');
var CarpoolButton = require('./CarpoolButton.jsx');
var CarpoolSignUp = require('./CarpoolSignUp.jsx');


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
    this.setState({
      registeredCar: true
    });
  },
  render: function () {
    return (
      <div>
        { this.state.registeredCar 
          ? <CarpoolSignUp
              capacity={this.state.carpoolCapacityInput}/>
          : <CarpoolButton
              onClick={this.handleClick}
              displayButton={this.state.displayButton}
              onInputChange={this.handleInputChange}
              onFormSubmit={this.handleFormSubmit}/>
        }
      </div>
    )
  }
});

module.exports = CarpoolForm;