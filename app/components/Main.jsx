var React = require('react');

var Main = React.createClass({
  getInitialState: function () {
    return { 
      locationInput: ''
    }
  },
  handleNewInput: function (newInput) {
    this.setState({
      locationInput: newInput
    });
  },
  render: function () {
    var children = React.cloneElement(
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              locationInput: this.state.locationInput
            }
        );
    return (
      <div id="body-overlay">
        {children}
      </div>
    )
  }
});

module.exports = Main;