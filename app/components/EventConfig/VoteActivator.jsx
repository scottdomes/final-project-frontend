var React = require('react');
var VoteActivatorButton = require('../EventConfig/VoteActivatorButton.jsx');

var VoteActivator = React.createClass({
  handleButtonClick: function (selectionStatus, label) {
    this.props.onClick(selectionStatus, label);
  },
  render: function () {
    return (
      <div>
        <div id="vote-activator-heading" className="row">
          <div className="large-12 large columns text-center">
            <h3>Allow voting on:</h3>
          </div>
        </div>

        <div id="vote-activator" className="row">
          <div className="large-6 large columns text-center">
            <VoteActivatorButton 
              label='Date'
              onClick={this.handleButtonClick} />
          </div>

          <div className="large-6 large columns text-center">
            <VoteActivatorButton 
              label='Location'
              onClick={this.handleButtonClick} />
          </div> 
        </div> 
      </div>
    )
  }
});

module.exports = VoteActivator;