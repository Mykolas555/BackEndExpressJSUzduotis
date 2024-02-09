//app.js

const express = require('express');
const app = express();
const morgan = require('morgan');
const expencesRouter = require('./routes/expenceRoute');

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/expences', expencesRouter);

module.exports = app;
