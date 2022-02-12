const express = require("express")
const db = require("../models/db")
const router = express.Router()

router.get("/", function (req, res, next) {
    res.render("index",
    {locals: {title: "The Roses",
    subtext: "These are words"}})
})

module.exports = router;