'use strict';

const express             = require('express');
const logger              = require('./middleware/logger');
const getDatabase         = require('./database/connection.js');
const routeGenerator      = require('./routes');
const { PORT, HOST }      = require('./constants/config');

// Dependencies
const database = getDatabase(process.env.DATABASE_TYPE);
const routes = routeGenerator(database);

// App
const app = express();

app.use(express.json());
app.use(logger);
app.use(routes);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
