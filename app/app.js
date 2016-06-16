// vendor styles
require('./assets/stylesheets/foundation.css');
require('./assets/daterangepicker.css');

// app specific styles
require('./assets/global.css');
require('./assets/app.css');
require('./assets/landing.css');
require('./assets/event-config.css');
require('./assets/friends-invite.css');
require('./assets/vote.css');
require('./assets/sidebar.css');
require('./assets/EventDetails.css')


var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));