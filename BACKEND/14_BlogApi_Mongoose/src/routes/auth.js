"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const { login } = require("../controllers/authController");

// URL : /auth

router.post("/login", login);

module.exports = router;
