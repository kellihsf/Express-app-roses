const express = require('express')
const router = express.Router()

const db = require('../models/db')

router.get("/", function (req, res, next) {
    res.render("nameslist", {
        locals: {
            title: "List of Movies/Shows",
            path: req.path,
            showsData: db,
            shows: `<h2>rendered show data</h2>`
        },
        partials: {
            details: "partials/index"
        }
    })
})