var React = require('react');

var BackButton = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleClick: function (e) {
    e.stopPropagation();
    this.context.router.push({
      pathname: this.props.prevpage
    });
  },
  render: function () {
    return (
      <div id="back-button-container" onClick={this.handleClick}>
        <img src="//localhost:3000/img/arrows.png" className="arrow back-button" />
        <h3>Back</h3>
      </div>
    )
  }
});

module.exports = BackButton;