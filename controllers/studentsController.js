
const db = require('../database/connection');

class EstudentsController {
    constructor() {

    }

    read(req, res) {
        res.json({ msg: 'Get students' });
    }

    readDetail(req, res) {
        const { id } = req.params;
        res.json({ msg: `Get student ${id}` });
    }

    create(req, res) {
        res.json({ msg: 'Add student' });
    }

    update(req, res) {
        res.json({ msg: 'Update student' });
    }

    deleteStudent(req, res) {
        res.json({ msg: 'Delete student' });
    }
}

module.exports = new EstudentsController();