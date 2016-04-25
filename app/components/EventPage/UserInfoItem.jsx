var React = require('react');
var classNames = require('classnames');



function UserInfoItem(props) {
  // const {packingList, onClick} = props;

  function handleOnClick(e){
    // console.log('click');

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
      <div>
          {props.carpool && <a href="#" className="button tiny carpool-button"><b>Carpool</b></a>}
      </div>
    <hr />
    </div>
  )

};

module.exports = UserInfoItem;


