"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const { isAdmin } = require("../middlewares/permissions");
const user = require("../controllers/user");

// URL: /users

router.use(isAdmin);

router.route("/").get(user.list).post(user.create);

router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.deleteUser);

/* ------------------------------------------------------- */
module.exports = router;
