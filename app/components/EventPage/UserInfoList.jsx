var React = require('react');
var UserInfoItem = require('./UserInfoItem.jsx');

var UserInfoList = React.createClass({
  handleOnClick: function (){
  },
  render: function (){

    var users = this.props.userList.map((user, index) => {
      var isCurrentUser = this.props.currentUserName === user.name 
                    ? true
                    : false;
      return <UserInfoItem 
        onClick={this.handleOnClick.bind(this, index)} 
        key={index} 
        userInfo={user} 
        carpool={true}
        isCurrentUser={isCurrentUser}/>
    });

    return (
      <div id="user-scroll-section" style={{'overflowX': 'hidden', 'overflowY': 'auto'}}>
        {users}
      </div>
    )
  }
});

module.exports = UserInfoList;

