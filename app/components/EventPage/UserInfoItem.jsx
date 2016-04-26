var React = require('react');
var classNames = require('classnames');
var CarpoolForm = require('./CarpoolForm.jsx');

function UserInfoItem(props) {

  function handleRegisterCar(capacity){
    props.onRegisterCar(capacity);
  }

  function handleOnClick() {

  }

  function handleCarpoolSignUp(car_id) {
    props.onCarpoolSignUp(car_id);
  }

  function handleLeaveCar(car_id) {
    props.onLeaveCar(car_id);
  }

  return(
    <div className={classNames({"user-profile-info": true})}
    onClick={handleOnClick}>
      <div className='user-profile-image'>
        { props.userInfo.picture_path === ''
          ? <img className='user-profile-image' src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-128.png' />
          : <img className='user-profile-image' src={props.userInfo.picture_path}/>
        }
      </div>
      <div className='user-profile-name'>
          {props.userInfo.name}
      </div>
      <CarpoolForm
        onRegisterCar={handleRegisterCar}
        car={props.car}
        rides={props.rides}
        isCurrentUser={props.isCurrentUser}
        isCurrentUserCar={props.isCurrentUserCar}
        currentUserID={props.currentUserID}
        onCarpoolSignUp={handleCarpoolSignUp}
        onLeaveCar={handleLeaveCar}
        userList={props.userList}/>

    <hr />
    </div>
  )

};

module.exports = UserInfoItem;


