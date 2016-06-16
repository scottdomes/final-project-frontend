var React = require('react');
var UserInfoItem = require('./UserInfoItem');

var UserInfoList = React.createClass({
  handleRegisterCar: function (capacity){
    this.props.onRegisterCar(capacity);
  },
  handleOnClick: function () {

  },
  handleCarpoolSignUp: function (car_id) {
    this.props.onCarpoolSignUp(car_id);
  },
  handleLeaveCar: function (car_id) {
    this.props.onLeaveCar(car_id);
  },
  render: function (){
    var users = this.props.userList.map((user, index) => {
      var carDetails = {};
      var rides = [];
      var isCurrentUserCar = false;
      var isCurrentUser = this.props.currentUserName === user.name 
                    ? true
                    : false;
      var car = this.props.cars.filter(function (car) {
        return car.car.user_id === user.id
      })[0];

      if (car) {
        carDetails = car.car;
        rides = car.rides;

        if (this.props.currentUserCar === carDetails.id) {
          isCurrentUserCar = true;
        }          
      }
      return <UserInfoItem 
        onClick={this.handleOnClick.bind(this, index)} 
        key={index} 
        userInfo={user} 
        carpool={true}
        isCurrentUser={isCurrentUser}
        onRegisterCar={this.handleRegisterCar}
        car={carDetails}
        rides={rides}
        onCarpoolSignUp={this.handleCarpoolSignUp}
        onLeaveCar={this.handleLeaveCar}
        currentUserID={this.props.currentUserID}
        isCurrentUserCar={isCurrentUserCar}
        userList={this.props.userList}/>
    });

    return (
        <div className="row">
          {users}
        </div>
    )
  }
});

module.exports = UserInfoList;

