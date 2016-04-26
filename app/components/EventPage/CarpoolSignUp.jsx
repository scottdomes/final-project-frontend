var React = require('react');

var CarpoolSignUp = React.createClass({
  render: function () {
    return (
      <div>
        <p>Can take {this.props.capacity} more</p>
        <button 
          className="button success tiny">
            Join Car
        </button>
      </div>
    )
  }
});

module.exports = CarpoolSignUp;