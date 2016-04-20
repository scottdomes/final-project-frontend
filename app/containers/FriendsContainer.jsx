var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var BackButton = require('../components/BackButton.jsx');

var FriendsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleClick: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: '/eventconfig'
    })
  },
  render: function () {
    return (
        <div>
          <BackButton prevpage={"/"} />
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