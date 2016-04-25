var React = require('react');
var BackButton = require('../components/BackButton.jsx');


var ProgressIndicator = React.createClass({
  render: function () {
    return (
      <div id="progress-indicator-wrapper">
        <div className="row">
        
          <BackButton onClick={this.props.onClick} />
          <div className="row" id="progress-indicator" data-page={this.props.page}>
            <div className="large-2 custom-offset large columns">
              <div id="location-circle" className="outline-circle">
                <img src="//localhost:3000/img/location.png" />
              </div>
            </div>

            <div className="large-1 large columns text-center">
              <img src="//localhost:3000/img/arrows.png" className="arrow" />
            </div>

            <div className="large-2 large columns">
              <div id="friends-circle" className="outline-circle">
                <img src="//localhost:3000/img/three.png" />
              </div>
            </div>

            <div className="large-1 large columns text-center">
              <img src="//localhost:3000/img/arrows.png" className="arrow" />
            </div>

            <div id="vote-circle" className="large-2 large columns">
              <div className="outline-circle">
                <img src="//localhost:3000/img/interface.png" />
              </div>
            </div>

            <div className="large-1 large columns text-center">
              <img src="//localhost:3000/img/arrows.png" className="arrow" />
            </div>

            <div className="large-2 end large columns">
              <div id="list-circle" className="outline-circle">
                <img src="//localhost:3000/img/paper.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ProgressIndicator;