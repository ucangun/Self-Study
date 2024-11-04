"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const express = require("express");
const router = express.Router();

const {
  list,
  create,
  read,
  update,
  delete: deleteUser,
} = require("../controllers/user");

router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(deleteUser);

module.exports = router;
