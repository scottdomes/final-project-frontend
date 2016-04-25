var React = require('react');

var LandingForm = React.createClass({
  handleInputChange: function(event) {
    const { value } = event.target;
    this.props.onNewInput(value);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit();
  },
  render: function () {
    return (
      <div className="row" id="enter-location">
      <div className="column large-4 small-10 small-centered text-center">
          <form 
            id="form-enter-location" 
            onSubmit={this.handleSubmit}>
            <input 
              onChange={this.handleInputChange} 
              type="text" 
              placeholder="Where do you want to go?"
              required/>
            <button
              className="button medium radius expanded">
              Let's go!
            </button>
          </form>
        </div> 
      </div>
    )
  }
});

module.exports = LandingForm;