var React = require('react');
var UserInfoItem = require('./UserInfoItem.jsx');

var UserInfoList = React.createClass({
  getInitialState: function() {
      return {
         users: [{name: 'jordan hung lo', profile_image: null, carpool: true},{name: 'Tupac Shakur', profile_image: null, carpool: true},{name: 'Biggie Small', profile_image: null, carpool: false}]
      };
  },
  handleOnClick: function (){
    console.log('click mother fucker');
  },
  render: function (){
    console.log('here')
    console.log(this.state.users);

    var userList = this.state.users;
    var users = userList.map((user, index) => {
      // console.log(item);
      return <UserInfoItem onClick={this.handleOnClick.bind(this, index)} key={index} userInfo={user} />
    });

    return (
      <div>
        {users}
      </div>
    )
  }
});

module.exports = UserInfoList;

