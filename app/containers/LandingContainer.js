var React = require('react');
var LandingHeader = require('../components/LandingPage/LandingHeader');
var LandingForm = require('../components/LandingPage/LandingForm');
var LandingFBLogin = require('../components/LandingPage/LandingFBLogin');
var Facebook = require('../components/Facebook');

var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;


var LandingContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      input: ''
    }
  },
  componentWillMount: function (){
    console.log("I am getting called");
    this.props.resetState();
  },
  handleNewInput: function(newInput) {
    this.props.onNewInput(newInput);
  },
  handleSubmit: function() {
    browserHistory.push({
      pathname: '/event/eventconfig'
    })
  },
  handleLogin: function () {
    this.props.onLogin();
  },
  render: function () {
    return (
      <div className="landing-page text-center">
        <LandingHeader />
        { this.props.loading ? <p style={{marginTop: "40px", fontWeight: "600"}}>Loading...</p> : (this.props.loggedin ? 
          <LandingForm 
            onNewInput={this.handleNewInput} 
            onSubmit={this.handleSubmit} 
            userName={this.props.userName}
          />
          : <LandingFBLogin onLogin={this.handleLogin} />
        )}
      </div>
    )
  }
});

module.exports = LandingContainer;