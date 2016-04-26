var React = require('react');

var CarpoolSignUp = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    this.props.onClick();
  },
  render: function () {
    var buttonText = this.props.currentUserHasRide ? "Leave Car" : "Join Car";
    return (
      <div>
        <p>Can take {this.props.capacity} more</p>
        { this.props.isCurrentUser 
          ? <div></div>
          : <button 
              className="button success tiny"
              onClick={this.handleClick}>
                {buttonText}
            </button>
        }        
      </div>
    )
  }
});

module.exports = CarpoolSignUp;