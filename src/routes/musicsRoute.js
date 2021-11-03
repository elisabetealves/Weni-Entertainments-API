const express = require('express');
const router = express.Router();
const controller = require('../controllers/musicsController');

router.post('/create', controller.createMusic);

router.get('/all', controller.getAll);

router.get('/title', controller.getByTitle);

router.get('/:id', controller.getById);

router.put('/:id', controller.updateMusic);

router.patch('/:id', controller.updateSomething);

router.delete('/:id', controller.deleteMusic);

router.post('/:id/like', controller.like)
router.post('/:id/dislike', controller.dislike);

module.exports = router