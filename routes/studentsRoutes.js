
const express = require('express');
const router = express.Router();
const { read, readDetail, create, update, deleteStudent} = require('../controllers/studentsController');

router.get('/', read);

router.post('/', create);

router.route('/:id')
    .get(readDetail)
    .put(update)
    .delete(deleteStudent);


module.exports = router;