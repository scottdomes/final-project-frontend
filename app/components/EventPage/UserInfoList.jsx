var React = require('react');
var UserInfoItem = require('./UserInfoItem.jsx');

var UserInfoList = React.createClass({
  handleRegisterCar: function (capacity){
    this.props.onRegisterCar(capacity);
  },
  handleOnClick: function () {

  },
  handleCarpoolSignUp: function (car_id) {
    this.props.onCarpoolSignUp(car_id);
  },
  render: function (){

    var users = this.props.userList.map((user, index) => {
      var isCurrentUser = this.props.currentUserName === user.name 
                    ? true
                    : false;
      var car = this.props.cars.filter(function (car) {
        return car.car.user_id === user.id
      });
      var rides = car[0].rides.filter(function (ride) {
        return ride.user_id === this.props.currentUserID
      }.bind(this));
      return <UserInfoItem 
        onClick={this.handleOnClick.bind(this, index)} 
        key={index} 
        userInfo={user} 
        carpool={true}
        isCurrentUser={isCurrentUser}
        onRegisterCar={this.handleRegisterCar}
        car={car[0].car}
        rides={rides}
        onCarpoolSignUp={this.handleCarpoolSignUp}
        currentUserID={this.props.currentUserID}/>
    });

    return (
      <div id="user-scroll-section" style={{'overflowX': 'hidden', 'overflowY': 'auto'}}>
        {users}
      </div>
    )
  }
});

module.exports = UserInfoList;

