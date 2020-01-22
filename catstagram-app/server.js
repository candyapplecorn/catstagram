'use strict';

const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const catNameMiddleware = require('./controllers/cat-names.js');
const getDatabase = require('./database/connection.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

loggerMiddleware(app);

app.get('/', (req, res) => {
  res.send('Hello World!!\n');
});

const database = getDatabase(process.env.DATABASE_TYPE);

catNameMiddleware(app, database);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
