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
console.log('App Listening on ');
