
var React = require('react');
var CarpoolButton = require('./CarpoolButton.jsx');
var CarpoolSignUp = require('./CarpoolSignUp.jsx');


var CarpoolForm = React.createClass({
  getInitialState: function () {
    var currentRides = this.props.rides ? this.props.rides.length : 0;
    var carCapacity = this.props.car.passenger_capacity !== undefined ? this.props.car.passenger_capacity - currentRides : 0;
    return {
      displayButton: true,
      carpoolCapacityInput: carCapacity,
      registeredCar: this.props.car.passenger_capacity !== undefined,
      currentUserHasRide: this.props.rides && this.props.rides.length > 0
    }
  },
  componentWillReceiveProps: function () {
    var carCapacity = this.props.car !== {} 
                      ? this.props.car.passenger_capacity - this.props.rides.length
                       : 0;
    this.setState({
      registeredCar: this.props.car.passenger_capacity !== undefined,
      carpoolCapacityInput: carCapacity,
      currentUserHasRide: this.props.rides && this.props.rides.length > 0,
    });
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
  handleLeaveCar: function () {
    this.props.onLeaveCar(this.props.car.id);
  },
  render: function () {
    var usersInCar = [];
    var userNamesInCar = [];

    for (var i = 0; i < this.props.rides.length; i++) {
      var ride = this.props.rides[i];
      matchingUser = this.props.userList.find(function (user) {
        return user.id === ride.user_id
      })
      if (matchingUser) {
        usersInCar.push(matchingUser);
      }
    }
    console.log(usersInCar);
    if (usersInCar.length > 0) {
      userNamesInCar = usersInCar.map(function (user) {
        return user.name
      }) 
    }
    return (
      <div>  
        { this.state.registeredCar 
          ? <div>
              <p>Taking: {userNamesInCar.join(', ')}</p>
              <CarpoolSignUp
                capacity={this.state.carpoolCapacityInput}
                isCurrentUser={this.props.isCurrentUser}
                onJoinCar={this.handleCarpoolSignup}
                onLeaveCar={this.handleLeaveCar}
                isCurrentUserCar={this.props.isCurrentUserCar}/>
            </div>
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