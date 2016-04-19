var React = require('react');

var ProgressIndicator = React.createClass({
  render: function () {
    return (
      <div className="row" id="progress-indicator">
        <div className="large-2 custom-offset large columns">
          <div className="outline-circle completed">
            <img src="//localhost:3000/img/location.png" />
          </div>
        </div>

        <div className="large-1 large columns text-center">
          <img src="//localhost:3000/img/arrows.png" className="arrow" />
        </div>

        <div className="large-2 large columns">
          <div className="outline-circle completed">
            <img src="//localhost:3000/img/three.png" />
          </div>
        </div>

        <div className="large-1 large columns text-center">
          <img src="//localhost:3000/img/arrows.png" className="arrow" />
        </div>

        <div className="large-2 large columns">
          <div className="outline-circle">
            <img src="//localhost:3000/img/interface.png" />
          </div>
        </div>

        <div className="large-1 large columns text-center">
          <img src="//localhost:3000/img/arrows.png" className="arrow" />
        </div>

        <div className="large-2 end large columns">
          <div className="outline-circle">
            <img src="//localhost:3000/img/paper.png" />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ProgressIndicator;