var React = require('react');
var UserInfoItem = require('./UserInfoItem.jsx');

var UserInfoList = React.createClass({
  getInitialState: function() {
      return {
         users: [{name: 'jordan hung lo', profile_image: null, carpool: true},{name: 'Tupac Shakur', profile_image: null, carpool: true},{name: 'Biggie Small', profile_image: null, carpool: false}]
      };
  },
  handleOnClick: function (){
    console.log('User Info List click');
  },
  render: function (){
    // console.log('UserInfoList')
    // console.log(this.state.users);
    // console.log("WOAHHHHHH")
    // console.log(this.props.allUsers)
    var records =[];
    for (var i = 0; i < 100; i++){
      records.push({name: 'jordan hung lo', profile_image: null, carpool: true});
    }

    var userList = records; //this.state.users;
    var users = userList.map((user, index) => {
      return <UserInfoItem onClick={this.handleOnClick.bind(this, index)} key={index} userInfo={user} />
    });

    return (
      <div id="user-scroll-section" style={{'overflowX': 'hidden', 'overflowY': 'auto'}}>
        {users}
      </div>
    )
  }
});

module.exports = UserInfoList;

