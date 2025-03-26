
const db = require('../database/connection');

class CoursesController {
    constructor() {

    }

    read(req, res) {
        res.json({ msg: 'Get courses' });
    }

    readDetail(req, res) {
        const { id } = req.params;
        res.json({ msg: `Get course ${id}` });
    }

    create(req, res) {
        res.json({ msg: 'Add course' });
    }

    update(req, res) {
        res.json({ msg: 'Update course' });
    }

    deleteCourse(req, res) {
        res.json({ msg: 'Delete course' });
    }
}

module.exports = new CoursesController();