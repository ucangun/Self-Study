"use strict";

const router = require("express").Router();

//?  router.route()

router
  .route("/")
  .get((req, res) => {
    res.send("Get");
  })
  .post((req, res) => {
    res.send("Post");
  })
  .put((req, res) => {
    res.send("Put");
  });

module.exports = router;
