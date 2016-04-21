var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var BackButton = require('../components/BackButton.jsx');

var FriendsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleInviteClick: function (e) {
    e.stopPropagation();
    FB.ui({
      app_id: '238732356487269',
      method: 'send',
      link: "http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html"
    });
  },
  handleDoneClick: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: 'event/vote'
    })
  },
  render: function () {
    return (
        <div>
          <BackButton prevpage={"/eventconfig"} />
          <div className="row" id="button-friends-done">
            <div className="large-6 large-centered columns text-center">
              <button className="button success wide" onClick={this.handleInviteClick}>Invite Friends</button>
            </div>
          </div>
          <div className="row" id="button-friends-done">
            <div className="large-6 large-centered columns text-center">
              <button className="button success wide" onClick={this.handleDoneClick}>Done</button>
            </div>
          </div>
        </div>
    )
  }
});

module.exports = FriendsContainer;