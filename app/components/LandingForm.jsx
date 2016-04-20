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
        <div className="large-6 large-centered columns">
          <form id="form-enter-location">
            <input onChange={this.handleInputChange} type="text" placeholder="Where do you want to go?" />
            <button onClick={this.handleSubmit}
              className="button success wide">
              Let's go!
            </button>
          </form>
        </div> 
      </div>
    )
  }
});

module.exports = LandingForm;