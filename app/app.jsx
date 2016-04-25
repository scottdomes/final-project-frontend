// vendor styles
require('./assets/stylesheets/foundation.css');
require('./assets/daterangepicker.css');

// app specific styles
require('./assets/global.css');
require('./assets/app.css');
<<<<<<< HEAD
require('./assets/landing.css');
require('./assets/event-config.css');
require('./assets/friends-invite.css');
require('./assets/vote.css');
require('./assets/sidebar.css');
require('./assets/EventDetails.css')
=======
require('./assets/Sidebar.css');
>>>>>>> 6518986b676f4f28cf02dad3cdfd699f5b28fb29


var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.jsx');

ReactDOM.render(routes, document.getElementById('app'));