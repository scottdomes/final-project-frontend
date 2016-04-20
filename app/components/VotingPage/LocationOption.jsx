var React = require('react');

var LocationOption = React.createClass({
  render: function () {
    return (
      <div className="large-2 large columns text-center">
        <div className="location-option-wrapper">
          <img src="//localhost:3000/img/tent3.jpg" />
          <div className="location-overlay"></div>
          <h3>{this.props.name}</h3>
          <h4>Votes: {this.props.votes}</h4>
        </div>
        <button className="location-vote-button button success">Vote for {this.props.name}</button>
      </div>
    )
  }
});

module.exports = LocationOption;