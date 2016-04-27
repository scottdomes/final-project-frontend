var React = require('react');

var AddLocation = React.createClass({
  getInitialState: function () {
    return {
      displayForm: false
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  handleInputChange: function (e) {
    e.stopPropagation();
    this.props.onChange(e.target.value);
  },
  handleExpandOrCloseForm: function (e) {
    e.stopPropagation();
    var boolean = this.state.displayForm ? false : true;
    this.setState({
      displayForm: boolean
    });
  },
  render: function () {
    var formDisplay = this.state.displayForm ? {"display": "block"} : {"display": "none"};
    var buttonText = this.state.displayForm ? "Close" : "Add";
    return (
      <div>
        <button 
          className="button success add-location-button tiny"
          onClick={this.handleExpandOrCloseForm}
          style={this.props.buttonDisplay}>
            {buttonText}
        </button>
        <form onSubmit={this.handleSubmit} style={formDisplay}>
          <input type="text" placeholder="Add location..." onChange={this.handleInputChange} />
          <button className="button success">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddLocation;