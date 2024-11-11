"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ----------------------------------------------------- */

const {
  list,
  create,
  read,
  update,
  delete: deleteDepartment,
  personnels,
} = require("../controllers/department");

router.route("/").get(list).post(create);

router
  .route("/:id")
  .get(read)
  .put(update)
  .patch(update)
  .delete(deleteDepartment);

router.route("/:id/personnels").get(personnels);

/* ------------------------------------------------------- */
module.exports = router;
