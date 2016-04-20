var React = require('react');

var LocationVoting = React.createClass({
  handleInputChange: function (e) {
    e.stopPropagation();
    this.props.onChange(e.target.value);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  render: function () {
    return (
      <div>
        <div id="location-options" className="row">
          <div className="large-12 large columns text-center">
            <div className="location-option-wrapper">
              <img src="//localhost:3000/img/tent3.jpg" />
              <div className="location-overlay"></div>
              <h3>Squamish</h3>
              <h4>Votes: 5</h4>
            </div>
            <button className="location-vote-button button success">Vote for Squamish</button>
          </div>
        </div>
        <div id="add-location" className="row">
          <div className="large-4 large-centered large columns text-center">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Add location..." onChange={this.handleInputChange} />
              <button className="button success">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LocationVoting;