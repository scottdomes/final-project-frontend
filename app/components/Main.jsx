var React = require('react');

var Main = React.createClass({
  handleNewInput: function (newInput) {
    console.log(newInput)
  },
  render: function () {
    return (
      <div id="body-overlay">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;