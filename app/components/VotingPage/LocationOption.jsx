var React = require('react');

var LocationOption = React.createClass({
  render: function () {
    return (
      <div className="large-2 columns text-center end">
        <div className="location-option-wrapper">
          <img src="//localhost:3000/img/tent3.jpg" />
          <div className="location-overlay"></div>
          <div className="location-info">
            <h3>{this.props.name}</h3>
            <h4>Votes: {this.props.votes}</h4>
          </div>
        </div>
        <button className="location-vote-button button success">Vote</button>
      </div>
    )
  }
});

module.exports = LocationOption;