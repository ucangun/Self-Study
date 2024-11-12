"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const {
  list,
  create,
  read,
  update,
  delete: deleteToken,
} = require("../controllers/token");
const { isAdmin } = require("../middlewares/permissions");

// URL : /tokens

router.use(isAdmin);

router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(deleteToken);

/* ------------------------------------------------------- */
module.exports = router;
