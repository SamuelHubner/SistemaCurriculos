const express = require("express");
const router = express.Router();

const knex = require('../knex.js');

router.post("/create-table-test", (req, res) => {
    try {
        knex.schema.createTable('test', table => {
            table.increments('id');
            table.string('testing');
        })
            .then(a => res.status(200).json(a))
            .catch(e => console.log(e))
    } catch (err) {
        console.log(err)
    }
})


router.post("/insert-table-test", (req, res) => {
    try {
        knex('test')
            .returning(['id', 'testing'])
            .insert({ testing: 'testing insert' })
            .then(a => res.status(200).json(a))
            .catch(e => console.log(e))
    } catch (err) {
        console.log(err)
    }
})

router.get("/print-table-test", (req, res) => {
    try {
        knex
            .select()
            .table('test')
            .then(a => res.status(200).json(a))
            .catch(e => console.log(e))
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;
