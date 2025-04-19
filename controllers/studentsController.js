
const db = require('../database/connection');

class EstudentsController {
    constructor() {

    }

    read(req, res) {
        try {
            db.query(
                `SELECT * FROM students`,
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }

                    res.status(200).json(rows);
                }
            )
        } catch (error) {
            res.status(500).send(err.message);
        }
    }

    readDetail(req, res) {
        const { id } = req.params;

        try {
            db.query(
                `SELECT * FROM students WHERE id = ?`,
                [id],
                (err, rows) => {
                    if (err) {
                        return res.status(400).send({ error: err.message });
                    }

                    if (rows.length === 0) {
                        return res.status(404).json({ message: `Estudent with ID: ${id} not found !!` });
                    }

                    res.status(200).json(rows[0]);
                }
            )
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    create(req, res) {
        try {

            const { dni, first_name, last_name, email, phone } = req.body;

            db.query(
                `INSERT INTO students
                (id, dni, first_name, last_name, email, phone)
                VALUES(NULL, ?, ?, ?, ?, ?);`,
                [dni, first_name, last_name, email, phone],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }

                    res.status(201).json({ id: rows.insertId });
                }
            )
        } catch (error) {
            res.status(500).send(err.message);
        }
    }

    update(req, res) {

        const { id } = req.params;

        try {
            const { dni, first_name, last_name, email, phone } = req.body;

            db.query(
                `UPDATE students
                SET dni = ?, first_name = ?, last_name = ?, email = ?, phone = ?
                WHERE id = ?;`,
                [dni, first_name, last_name, email, phone, id],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({ Response: `Student ${id} successfully updated!!` });
                }
            )
        } catch (error) {
            res.status(500).send(err.message);
        }

    }

    deleteStudent(req, res) {
        const { id } = req.params;

        try {

            db.query(
                `DELETE FROM students
                WHERE id = ?;`,
                [id],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({ Response: `Student ${id} successfully deleted!!` });
                }
            )
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new EstudentsController();