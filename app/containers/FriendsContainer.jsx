var React = require('react');
var Facebook = require('../components/Facebook.jsx');
var FriendList = require('../components/FriendList.jsx');


var FriendsContainer = React.createClass({

  getInitialState: function(){
    return{
      friendList: []
    }
  },
  
  componentDidMount: function() {
    var thisComponent = this;
    this.props.friendList = "im before you";
    FB.api("/me/friends?fields=email,name,gender,picture", function (friends) {
      thisComponent.setState({friendList: friends.data}) // triggers render
    });
  },

  render: function () {
    console.log('fl', this.state.friendList);
    return (
      <div>
       <FriendList friends={this.state.friendList}/>
      </div>
    )
  }
});

module.exports = FriendsContainer;