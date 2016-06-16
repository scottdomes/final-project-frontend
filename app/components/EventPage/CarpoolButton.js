var React = require('react');

var CarpoolButton = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    this.props.onClick();
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },
  handleInputChange: function (e) {
    this.props.onInputChange(e.target.value)
  },
  render: function () {
    return (
        <div>
          { this.props.displayButton  
            ? <button
                className="button tiny carpool-button"
                onClick={this.handleClick}>
                  <b>Register Car</b>
              </button>
            : <form onSubmit={this.handleSubmit}>
                <label>Room for you plus </label>
                <input 
                  onChange={this.handleInputChange}
                  type="number" 
                  min="1"/>
              </form>
          }
        </div> 
    )
  }
});

module.exports = CarpoolButton;