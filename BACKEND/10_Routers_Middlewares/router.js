"use strict";

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

const router = express.Router();

app.use(router);

/*
router.get("/", (req, res) => {
  res.send({
    message: "GET",
  });
});
router.get("/user", (req, res) => {
  res.send({
    message: "GET for user path",
  });
});
router.post("/", (req, res) => {
  res.send({
    message: "POST",
  });
});
*/

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
