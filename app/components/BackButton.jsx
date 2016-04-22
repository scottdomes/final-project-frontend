var React = require('react');

var BackButton = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleClick: function (e) {
    e.stopPropagation();
    this.props.onClick();
  },
  render: function () {
    return (
      <div id="back-button-container" onClick={this.handleClick}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
        <h3>Back</h3>
      </div>
    )
  }
});

module.exports = BackButton;