
const express = require('express');
const router = express.Router();
const { read, readDetail, create, update, deleteTeacher} = require('../controllers/teachersController');

router.get('/', read);

router.post('/', create);

router.route('/:id')
    .get(readDetail)
    .put(update)
    .delete(deleteTeacher);


module.exports = router;