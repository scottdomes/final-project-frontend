var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');

var FriendsContainer = React.createClass({
  render: function () {
    return (
        <ProgressIndicator page={"addfriends"}/>
    )
  }
});

module.exports = FriendsContainer;