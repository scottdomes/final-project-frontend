var React = require('react');

var Main = React.createClass({
  getInitialState: function () {
    return { 
      locationInput: '',
      dateRange: {}
    }
  },
  handleNewInput: function (newInput) {
    this.setState({
      locationInput: newInput
    });
  },
  handleNewDate: function(range) {
    console.log(range);
    this.setState({
      dateRange: {
        start: range.start._d.toString(),
        end: range.end._d.toString()
      }
    });
    console.log(this.state.dateRange);
  },
  render: function () {
    var children = React.cloneElement(
            this.props.children, 
            {
              onNewInput: this.handleNewInput,
              onNewDate: this.handleNewDate,
              locationInput: this.state.locationInput,
              dateRange: this.state.dateRange
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