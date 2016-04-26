var React = require('react');


var ProgressIndicator = React.createClass({
  render: function () {
    return (
      <div id="progress-indicator-wrapper">
          <div className="row" id="progress-indicator" data-page={this.props.page}>
            <div className="small-2 custom-offset columns">
              <div id="location-circle" className="outline-circle active">
                <img src="//localhost:3000/img/location.png" />
              </div>
            </div>

            <div className="small-1 columns text-center">
              <img src="//localhost:3000/img/arrows.png" className="arrow" />
            </div>

            <div className="small-2 columns">
              <div id="friends-circle" className="outline-circle">
                <img src="//localhost:3000/img/three.png" />
              </div>
            </div>

            <div className="small-1 columns text-center">
              <img src="//localhost:3000/img/arrows.png" className="arrow" />
            </div>

            <div id="vote-circle" className="small-2 columns">
              <div className="outline-circle">
                <img src="//localhost:3000/img/interface.png" />
              </div>
            </div>

            <div className="small-1 columns text-center">
              <img src="//localhost:3000/img/arrows.png" className="arrow" />
            </div>

            <div className="small-2 end columns">
              <div id="list-circle" className="outline-circle">
                <img src="//localhost:3000/img/paper.png" />
              </div>
            </div>
          </div>
      </div>
    )
  }
});

module.exports = ProgressIndicator;