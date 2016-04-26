var React = require('react');

var CarpoolSignUp = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    this.props.onClick();
  },
  render: function () {
    return (
      <div>
        <p>Can take {this.props.capacity} more</p>
        { this.props.isCurrentUser 
          ? <div></div>
          : <button 
              className="button success tiny"
              onClick={this.handleClick}>
                Join Car
            </button>
        }        
      </div>
    )
  }
});

module.exports = CarpoolSignUp;