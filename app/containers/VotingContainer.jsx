var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');
var BackButton = require('../components/BackButton.jsx');

var VotingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleClick: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: '/vote'
    })
  },
  render: function () {
    return (
      <div>
        <BackButton prevpage={"/eventconfig"}/>
        <ProgressIndicator page={"vote"}/>
        <div id="voting-page-heading" className="row">
          <div className="large-12 large columns text-center">
            <h3>Osama created the event Bear</h3>
          </div>
        </div>
        <div id="location-options" className="row">
          <div className="large-12 large columns text-center">
            <img src="//localhost:3000/img/tent3.jpg" />
            <button className="location-vote-button button success">Vote for Squamish</button>
          </div>
        </div>
        <div id="add-location" className="row">
          <div className="large-4 large-centered large columns text-center">
            <input type="text" placeholder="Add location..." />
          </div>
        </div>
        <h3>Start Date: {this.props.dateRange.start}</h3>
        <h3>End Date: {this.props.dateRange.end}</h3>
      </div>
    )
  }
});

module.exports = VotingContainer;