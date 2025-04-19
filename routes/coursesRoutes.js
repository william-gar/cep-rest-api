
const express = require('express');
const router = express.Router();
const { read, readDetail, create, update, deleteCourse, associateStudent} = require('../controllers/coursesController');

router.get('/', read);

router.post('/', create);
router.post('/associateStudent', associateStudent);

router.route('/:id')
    .get(readDetail)
    .put(update)
    .delete(deleteCourse);


module.exports = router;