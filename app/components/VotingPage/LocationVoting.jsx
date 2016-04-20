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
  render: function () {
    var locationList = this.props.locations.map(function (contact) {
      return <LocationOption 
        name={contact.name} 
        key={contact.id} 
        votes={contact.votes}/>
    });
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