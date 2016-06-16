var React = require('react');

var LandingHeader = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row" id="front-page-heading">
          <div className="large-6 large-centered columns">
            <h1>Plan less. Camp more.</h1>
            <h2>Social trip planning for campers</h2>
          </div>
        </div>

        <div className="row" id="process-explanation">
          <div className="large-3 columns">
            <img src="//localhost:3000/img/location.png" />
            <h3>Setup Event</h3>
          </div>

          <div className="large-3 columns">
            <img src="//localhost:3000/img/three.png" />
            <h3>Invite Friends</h3>
          </div>

          <div className="large-3 columns">
            <img src="//localhost:3000/img/interface.png" />
            <h3>Vote &amp; Decide</h3>
          </div>

          <div className="large-3 columns">
            <img src="//localhost:3000/img/paper.png" />
            <h3>Pack &amp; Ride</h3>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LandingHeader;
