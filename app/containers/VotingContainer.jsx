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
      </div>
    )
  }
});

module.exports = VotingContainer;