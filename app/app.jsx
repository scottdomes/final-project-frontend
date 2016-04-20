require('./assets/app.css');
require('./assets/daterangepicker.css');
require('./assets/EventDetails.css');


var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.jsx');

ReactDOM.render(routes, document.getElementById('app'));