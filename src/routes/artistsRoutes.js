const express = require('express');
const router = express.Router();
const controller = require('../controllers/artistsController');

router.post('/create', controller.createArtist);

route.get('/all', controller.getAll);

router.get('/name', controller.getByName)

route.get('/:id', controller.getById);

router.patch('/:id', controller.updateArtist);

router.delete("/:id", controller.deleteArtist);

module.exports = router