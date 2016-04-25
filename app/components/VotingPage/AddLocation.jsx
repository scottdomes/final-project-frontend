var React = require('react');

var AddLocation = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  handleInputChange: function (e) {
    e.stopPropagation();
    this.props.onChange(e.target.value);
  },
  render: function () {
    return (
      <div id="add-location" className="row">
        <div className="large-4 large-centered large columns text-center">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add location..." onChange={this.handleInputChange} />
            <button className="button success">Add</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = AddLocation;