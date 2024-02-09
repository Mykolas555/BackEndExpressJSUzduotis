//expenceRoute.js

const express = require('express');
const router = express.Router();
const expencesController = require('../controllers/expencesController');

router
    .route('/')
    .get(expencesController.getAllExpences)
    .post(expencesController.createExpence);

router
    .route('/:id')
    .get(expencesController.getExpence)
    .patch(expencesController.updateExpence)
    .delete(expencesController.deleteExpence);

module.exports = router;
