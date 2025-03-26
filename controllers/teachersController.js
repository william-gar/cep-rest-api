
const db = require('../database/connection');

class TeachersController {
    constructor() {

    }

    read(req, res) {
        res.json({ msg: 'Get teachers' });
    }

    readDetail(req, res) {
        res.json({ msg: 'Get teacher by id' });
    }

    create(req, res) {
        res.json({ msg: 'Add teacher' });
    }

    update(req, res) {
        res.json({ msg: 'Update teacher' });
    }

    deleteTeacher(req, res) {
        res.json({ msg: 'Delete teacher' });
    }
}

module.exports = new TeachersController();