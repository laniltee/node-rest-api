// Node Modules
const express = require('express');
const config = require('config');

// Project Level Modules
const routes = require('./routes/routes');

// Starting App
const app = express();

// Custom Middleware
app.use('/api', routes);

// App Port
app.listen(config.get('server.port'));
console.log(config.get('app.welcome_message_header'));
console.log(config.get('app.welcome_message_footer'));
