"use strict";

// $ npm i mongoose

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogAPI")
  .then(() => console.log("DB connecteted"))
  .catch(() => console.log("DB not connected"));

module.exports = mongoose;