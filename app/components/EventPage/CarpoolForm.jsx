var React = require('react');
var CarpoolButton = require('./CarpoolButton.jsx');
var CarpoolSignUp = require('./CarpoolSignUp.jsx');


var CarpoolForm = React.createClass({
  getInitialState: function () {
    var carCapacity = this.props.car ? this.props.car.passenger_capacity : 0;
    return {
      displayButton: true,
      carpoolCapacityInput: carCapacity,
      registeredCar: this.props.car !== undefined
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
    this.props.onRegisterCar(this.state.carpoolCapacityInput);
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