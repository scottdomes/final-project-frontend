var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var EventLink = React.createClass({
  handleClick: function () {
    this.props.onClick(this.props.eventDetails.id);
  },
  render: function () {
    var path = "eventdetails/" + this.props.eventDetails.id;
    // onClick={this.props.onEventChange(this.props.eventDetails.id)}
    return (
      <Link to={path} onClick={this.handleClick} >
        {this.props.eventDetails.name}
      </Link>
    )
  }
});

module.exports = EventLink;