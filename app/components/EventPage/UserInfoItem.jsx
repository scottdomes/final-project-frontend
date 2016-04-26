var React = require('react');
var classNames = require('classnames');
var CarpoolForm = require('./CarpoolForm.jsx');

function UserInfoItem(props) {

  function handleRegisterCar(capacity){
    props.onRegisterCar(capacity);
  }

  function handleOnClick() {

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
      { props.isCurrentUser 
          ?
            <CarpoolForm
              onRegisterCar={handleRegisterCar}
              car={props.car[0]}/>
          :
            <div></div>
      }

    <hr />
    </div>
  )

};

module.exports = UserInfoItem;


