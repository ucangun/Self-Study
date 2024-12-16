"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const user = require("../../controllers/view/userController");

// Create a new user
router.route("/register").post(user.register).get(user.register);

// Login and logout routes
// Handle login (POST for form submission)
router.route("/login").all(user.login);

// Handle logout (POST since it involves action)
router.get("/logout", user.logout);

module.exports = router;
