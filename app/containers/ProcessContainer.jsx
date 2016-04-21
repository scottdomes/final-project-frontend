var React = require('react');
var ProgressIndicator = require('../components/ProgressIndicator.jsx');

var ProcessContainer = React.createClass({
  render: function () {
    return (
      <div>
        <ProgressIndicator page={"eventconfig"}/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = ProcessContainer;