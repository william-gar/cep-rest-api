
const db = require('../database/connection');

class CoursesController {
    constructor() {

    }

    read(req, res) {
        try {
            db.query(`SELECT * FROM courses`,
                (err, rows) => {
                    if (err) {
                        return res.status(400).send(err);
                    }

                    res.status(200).json(rows);
                }
            )
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    readDetail(req, res) {
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM courses WHERE id = ?`, [id],
                (err, rows) => {
                    if (err) {
                        return res.status(400).send(err);
                    }

                    res.status(200).json(rows[0]);
                }
            )
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    create(req, res) {
        try {
            const { name, description, teacher_id } = req.body;

            db.query(`INSERT INTO courses
                (id, name, description, teacher_id)
                VALUES(NULL, ?, ?, ?);`,
                [name, description, teacher_id], (err, rows) => {
                    if (err) {
                        return res.status(400).send(err.message);
                    }

                    res.status(201).json({ id: rows.insertId });
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    update(req, res) {
        const { id } = req.params;

        try {
            const { name, description, teacher_id } = req.body;
            db.query(`UPDATE courses 
            SET name = ?, description = ?, teacher_id = ?
            WHERE id = ?;`,
                [name, description, teacher_id], (err, rows) => {
                    if (err) {
                        return res.status(400).send(err);
                    }

                    if (rows.affectedRows == 1)
                        res.status(200).json({ response: `Course successfully updated !!` });
                }
            )
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    deleteCourse(req, res) {
        const { id } = req.params;
        try {
            db.query(`DELETE FROM courses WHERE id = ?;`,
                [id], (err, rows) => {
                    if (err) {
                        return res.status(400).send(err);
                    }

                    if (rows.affectedRows == 1)
                        res.status(200).json({ response: `Course successfully deleted !!` });
                }
            )
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    associateStudent(req, res) {

        try {
            const { course_id, student_id } = req.body;
            db.query(`INSERT INTO courses_students
                    (course_id, student_id)
                    VALUES(?, ?);`,
                [course_id, student_id], (err, rows) => {
                    if (err) {
                        return res.status(400).send(err.message);
                    }

                    res.status(201).json({ response: 'Student successfully registered !!' });
                }
            )
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = new CoursesController();