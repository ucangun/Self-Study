"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

// auth:
router.use("/auth", require("./auth"));

// users:
router.use("/users", require("./user"));

// documents:
router.use("/documents", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
