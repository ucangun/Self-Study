"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const { login, refresh, logout } = require("../controllers/auth");

// /auth
router.post("/login", login);
router.post("/refresh", refresh);
router.get("/logout", logout);

/* ------------------------------------------------------- */
module.exports = router;
