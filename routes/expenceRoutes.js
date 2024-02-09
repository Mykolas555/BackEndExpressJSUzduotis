const express = require('express');
const router = express.Router();
const expencesController = require('../../controllers/expencesControler');

router
.route('/')
.get(expencesController.getAllHotels)
.post(expencesController.createHotel)
expencesRouter
.route('/:id')
.get(expencesController.getHotel)
.patch(expencesController.updateHotel)
.delete(expencesController.deleteHotel)

module.exports = router