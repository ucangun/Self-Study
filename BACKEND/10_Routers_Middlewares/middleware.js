"use strict";

/*
    EXPRESSJS MIDDLEWARE
*/
const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

/*
app.get("/", (req, res, next) => {
  console.log("Middleware 1 calisti");
  next();
});
app.get("/", (req, res, next) => {
  console.log("Middleware 2 calisti");
  next();
});
app.get("/", (req, res, next) => {
  res.send({
    message: "Hello World",
  });
});
*/

app.get("/", (req, res, next) => {
  console.log("Middleware 1 calisti");
  if (req.query.username == "clarusway") {
    next();
  } else {
    res.send({
      message: "username not exist",
    });
  }
});

app.get("/", (req, res, next) => {
  res.send({
    message: "Welcome Clarusway",
  });
});

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
