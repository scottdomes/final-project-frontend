var React = require('react');

var CarpoolSignUp = React.createClass({
  render: function () {
    return (
      <div>
        <p>Can take {this.props.capacity} more</p>
        { this.props.isCurrentUser 
          ? <div></div>
          : <button 
              className="button success tiny">
                Join Car
            </button>
        }        
      </div>
    )
  }
});

module.exports = CarpoolSignUp;