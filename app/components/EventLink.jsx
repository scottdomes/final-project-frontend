var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var EventLink = React.createClass({
  render: function () {
    var path = "eventdetails/" + this.props.eventDetails.id;
    return (
      <Link to={path} onClick={this.props.onEventChange}>
        {this.props.eventDetails.name}
      </Link>
    )
  }
});

module.exports = EventLink;