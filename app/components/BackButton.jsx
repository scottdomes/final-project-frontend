var React = require('react');

var BackButton = React.createClass({
  render: function () {
    return (
      <div id="back-button-container">
        <img src="//localhost:3000/img/arrows.png" className="arrow back-button" />
        <h3>Back</h3>
      </div>
    )
  }
});

module.exports = BackButton;