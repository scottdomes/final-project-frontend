var React = require('react');

var EventTitle = React.createClass({
  render: function (){
    return (
      <div>
        <img id="event-creator-pic" src={this.props.creator.picture_path}/>
        <p className="inline-text">Created by {this.props.creator.name}</p>
      </div>

    )
  }
});

module.exports = EventTitle;