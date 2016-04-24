var React = require('react');
var classNames = require('classnames');



function UserInfoItem(props) {
  // const {packingList, onClick} = props;

  function handleOnClick(e){
    // console.log('click');

  }
  // console.log('hurrr');
  // console.log(props);
  return(
    <div className={classNames({"user-profile-info": true})}
    onClick={handleOnClick}>
      <div className='user-profile-image'>
        {props.userInfo.profile_image || <img className='user-profile-image' src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-128.png' />}
      </div>
      <div className='user-profile-name'>
          {props.userInfo.name}
      </div>
      <div>
          {props.userInfo.carpool && <a href="#" className="button tiny carpool-button"><b>Carpool</b></a>}
      </div>
    <hr />
    </div>
  )

};

module.exports = UserInfoItem;


