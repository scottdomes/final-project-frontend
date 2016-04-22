var React = require('react');
var LocationOption = require('./LocationOption.jsx');

var LocationVoting = React.createClass({
  handleInputChange: function (e) {
    e.stopPropagation();
    this.props.onChange(e.target.value);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  handleVote: function (key) {
    this.props.onVote(key);
  },
  generateLocations: function () {
    var locationList = [];
    if (this.props.votingAllowed) {
      locationList = this.props.locations.map(function (location, index) {
        return <LocationOption 
          name={location.name} 
          key={index}
          id={location.id} 
          votes={location.votes}
          onVote={this.handleVote}/>
      });
    } else {
      locationList = this.props.locations.map(function (location, index) {
        return <LocationOption 
          name={location.name} 
          key={index}
          id={location.id} 
          votingDisallowed={true}/>
      });
    }
    return locationList;
  },
  render: function () {
    var locationList = this.generateLocations();
    return (
      <div>
        <div id="location-options" className="row">
          {locationList}
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