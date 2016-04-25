var React = require('react');
var UserInfoItem = require('./UserInfoItem.jsx');

var UserInfoList = React.createClass({
  handleOnClick: function (){
    console.log('User Info List click');
  },
  render: function (){
    console.log(this.props.userList);
    console.log("WOAHHHHHH");

    var users = this.props.userList.map((user, index) => {
      return <UserInfoItem onClick={this.handleOnClick.bind(this, index)} key={index} userInfo={user} carpool={true}/>
    });

    return (
      <div id="user-scroll-section" style={{'overflowX': 'hidden', 'overflowY': 'auto'}}>
        {users}
      </div>
    )
  }
});

module.exports = UserInfoList;

