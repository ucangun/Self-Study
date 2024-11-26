"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require("express").Router();
const { login, logout, refresh } = require("../controllers/auth");
/* ------------------------------------------------------- */

// URL :/auth

router.post("/login", login);

/* ------------------------------------------------------- */
module.exports = router;
