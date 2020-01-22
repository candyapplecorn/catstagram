'use strict';

const express = require('express');
const catNameMiddleware = require('./controllers/cat-names.js');
const getDatabase = require('./database/connection.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!!\n');
});

// Some logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

const database = getDatabase(process.env.DATABASE_TYPE);

catNameMiddleware(app, database);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
