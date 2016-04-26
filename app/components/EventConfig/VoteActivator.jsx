var React = require('react');
var VoteActivatorButton = require('../EventConfig/VoteActivatorButton.jsx');

var VoteActivator = React.createClass({
  handleButtonClick: function (selectionStatus, label) {
    this.props.onClick(selectionStatus, label);
  },
  render: function () {
    return (
      <div className="row" style={{marginTop: "35px"}}>
        <div id="vote-activator-heading">
          <div className="large-7 large-centered columns" style={{float: "none"}}>
            <h4>Allow your friends to vote on:</h4>
          </div>
        </div>

        <div className="large-7 large-centered columns" style={{float: "none"}}> 
          <div id="vote-activator" className="row">
            <p className="large-8 columns">Date of event: </p>
            <div className="large-4 columns text-center">
                <VoteActivatorButton 
                  label='Date'
                  onClick={this.handleButtonClick} />
            </div>
            <p className="large-8 columns">Location of event: </p>
            <div className="large-4 columns text-center">
              <VoteActivatorButton 
                label='Location'
                onClick={this.handleButtonClick} />
            </div> 
          </div> 
        </div>
      </div>
    )
  }
});

module.exports = VoteActivator;