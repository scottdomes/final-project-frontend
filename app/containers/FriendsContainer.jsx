var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');

var FriendsContainer = React.createClass({
  render: function () {
    return (
        <div>
          <ProgressIndicator page={"addfriends"}/>
          <div className="row" id="button-friends-done">
            <div className="large-6 large-centered columns text-center">
              <button className="button success wide" onClick={this.handleClick}>Done</button>
            </div>
          </div>
        </div>
    )
  }
});

module.exports = FriendsContainer;