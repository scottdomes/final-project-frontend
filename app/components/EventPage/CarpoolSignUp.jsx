var React = require('react');

var CarpoolSignUp = React.createClass({
  handleJoinCar: function (e) {
    e.stopPropagation();
    this.props.onJoinCar();
  },
  handleLeaveCar: function (e) {
    e.stopPropagation();
    this.props.onLeaveCar();
  },
  render: function () {
    var buttonText = this.props.currentUserHasRide ? "Leave Car" : "Join Car";
    return (
      <div>
        <p>Can take {this.props.capacity} more</p>
        { this.props.isCurrentUser 
          ? <div></div>
          : <div>
              { this.props.isCurrentUserCar 
                  ? <button 
                      className="button alert tiny"
                      onClick={this.handleLeaveCar}>
                        Leave Car
                    </button>
                  : <button 
                        className="button success tiny"
                        onClick={this.handleJoinCar}>
                          Join Car
                      </button>
              }
                    </div>
        }        
      </div>
    )
  }
});

module.exports = CarpoolSignUp;