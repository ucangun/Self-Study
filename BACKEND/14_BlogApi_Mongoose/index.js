"use strict";

/*****************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/****************************************************/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Middlewares:
app.use(express.json());
require("express-async-errors");

// Session Cookies
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.KEY_CODE,
  })
);

// DB Connection
require("./src/configs/dbConnection");

/* ------------------------------------------------------- */
// Routes:
app.all("/", (req, res) => {
  // req.session.user = { name: "Umut" };
  // req.session = null;
  res.send({
    message: "Welcome to the Blog API",
    // session: req.session,
    isLogin: req.session?.user ? true : false,
  });
});

app.use("/blog", require("./src/routes/blog"));
app.use("/user", require("./src/routes/user"));
app.use("/auth", require("./src/routes/auth"));

// Catch Errors:
app.use(require("./src/middlewares/errorHandler"));

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
