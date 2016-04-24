var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main.jsx');
var HelloWorld = require('../components/HelloWorld.jsx');
var LandingContainer = require('../containers/LandingContainer.jsx');
var FriendsContainer = require('../containers/FriendsContainer.jsx');
var EventConfigContainer = require('../containers/EventConfigContainer.jsx');
var VotingContainer = require('../containers/VotingContainer.jsx');
var EventDetailsContainer = require('../containers/EventPageContainers/EventDetailsContainer.jsx');
var ProcessContainer = require('../containers/ProcessContainer.jsx');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={LandingContainer}/>
      <Route path='event' component={ProcessContainer}>
        <Route path='addfriends' component={FriendsContainer}/>
        <Route path='eventconfig' component={EventConfigContainer}/>
        <Route path=':id/vote' component={VotingContainer}/>
      </Route>
      <Route path='eventdetails/:id' component={EventDetailsContainer} />
    </Route>
  </Router> 
);

module.exports = routes;
