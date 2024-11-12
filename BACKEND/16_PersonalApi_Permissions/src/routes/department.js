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
  delete: deleteDepartment,
  personnels,
} = require("../controllers/department");

// URL : /departments

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isActive && req.user.isAdmin) {
    next();
  } else {
    res.errorStatusCode = 403;
    throw new Error("No Permission:You must login and to be admin");
  }
};

router.route("/").get(isAdmin, list).post(create);

router
  .route("/:id")
  .get(read)
  .put(update)
  .patch(update)
  .delete(deleteDepartment);

router.get("/:id/personnels", personnels);

/* ------------------------------------------------------- */
module.exports = router;
