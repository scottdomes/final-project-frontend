var React = require('react');
var CarpoolButton = require('./CarpoolButton.jsx');
var CarpoolSignUp = require('./CarpoolSignUp.jsx');


var CarpoolForm = React.createClass({
  getInitialState: function () {
    var carCapacity = this.props.car !== undefined ? this.props.car.passenger_capacity : 0;
    return {
      displayButton: true,
      carpoolCapacityInput: carCapacity,
      registeredCar: carCapacity > 0
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
  handleCarpoolSignup: function () {
    this.props.onCarpoolSignUp(this.props.car.id);
  },
  render: function () {
    return (
      <div>
        { this.state.registeredCar 
          ? <CarpoolSignUp
              capacity={this.state.carpoolCapacityInput}
              isCurrentUser={this.props.isCurrentUser}
              onClick={this.handleCarpoolSignup}/>
          : <div></div>
        }
        { !this.state.registeredCar && this.props.isCurrentUser
          ? <CarpoolButton
              onClick={this.handleClick}
              displayButton={this.state.displayButton}
              onInputChange={this.handleInputChange}
              onFormSubmit={this.handleFormSubmit}/>
          : <div></div>
        }
      </div>
    )
  }
});

module.exports = CarpoolForm;