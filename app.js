const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
const hotelsRouter = express.Router();
const morgan = require('morgan')
 

 
app.use(morgan('dev'))
app.use('/api/v1/exprences',expencesRouter);

module.exports = app;