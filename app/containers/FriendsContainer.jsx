var React = require('react');

var FriendsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleInviteClick: function (e) {
    e.stopPropagation();
    FB.ui({
      app_id: '238732356487269',
      method: 'send',
      link: "http://camplight.herokuapp.com/event/"+this.props.event_id
    });
  },
  handleDoneClick: function (e) {
    e.stopPropagation();
    this.props.onDoneFriends();
  },
  render: function () {
    return (
        <div>
          <div className="row" style={{marginBottom: "50px"}}>
            <div className="large-6 large-centered columns text-center">
              <h4>
                Invite your friends to <br/><span>{this.props.eventName.toUpperCase()}</span>
                <br/>from <span>2016/4/20</span> to <span>2016/4/25</span><br/>
                at <span>{this.props.locationInput}</span>
              </h4>
            </div>
          </div>
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
