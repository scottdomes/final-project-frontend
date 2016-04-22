var React = require('react');

var SideBarButton = React.createClass({
  getInitialState: function() {
      return {
          events: [{title: 'Bear Camp', startDate: 'Monday April 20', endDate: 'Friday, April 25', location: 'Golden Ears'}]
      };
  },
  render: function (){
    return (
      <div>
        <img id="sidebar-button" src="//localhost:3000/img/signs-1.png" />
      </div>

    )
  }
});

module.exports = SideBarButton;

// <img src="//localhost:3000/img/tent3.jpg" />

