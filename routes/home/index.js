"use strict";

const express = require("express");
const router = express.Router();

router.get("/login", async(req, res) => {
    res.render("home/login")
});

router.get("/", async(req, res) => {
    res.render("home/index")
});

module.exports = router;