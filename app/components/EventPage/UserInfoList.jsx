var React = require('react');
var UserInfoItem = require('./UserInfoItem.jsx');

var UserInfoList = React.createClass({
  handleRegisterCar: function (capacity){
    this.props.onRegisterCar(capacity);
  },
  handleOnClick: function () {

  },
  render: function (){

    var users = this.props.userList.map((user, index) => {
      var isCurrentUser = this.props.currentUserName === user.name 
                    ? true
                    : false;
      var car = this.props.cars.filter(function (car) {
        return car.user_id === user.id
      });
      return <UserInfoItem 
        onClick={this.handleOnClick.bind(this, index)} 
        key={index} 
        userInfo={user} 
        carpool={true}
        isCurrentUser={isCurrentUser}
        onRegisterCar={this.handleRegisterCar}
        car={car}/>
    });

    return (
      <div id="user-scroll-section" style={{'overflowX': 'hidden', 'overflowY': 'auto'}}>
        {users}
      </div>
    )
  }
});

module.exports = UserInfoList;

