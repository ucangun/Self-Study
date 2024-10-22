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

/*
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
*/

/*
app.get("/", (req, res, next) => {
  if (req.query.username == "clarusway") {
    req.message = "Welcome";
  } else {
    req.message = "username not exist";
  }
  next();
});

app.get("/", (req, res, next) => {
  res.send({
    message: req.message,
  });
});
*/

/*
app.get("/", (req, res, next) => {
  req.message1 = "Message from mid1";
  next();
});
app.get("/", (req, res, next) => {
  req.message2 = "Message from mid2";
  next();
});
app.get("/", (req, res, next) => {
  req.message3 = "Message from mid3";
  next();
});

app.get("/", (req, res, next) => {
  res.send({
    message1: req.message1,
    message2: req.message2,
    message3: req.message3,
  });
});
*/

/*
const middlewarex = (req, res, next) => {
  console.log("midx");
  req.messagex = "Message from midx";
  next();
};

const middleware1 = (req, res, next) => {
  console.log("mid1");
  req.message1 = "Message from mid1";
  next();
};

const middleware2 = (req, res, next) => {
  console.log("mid2");
  req.message2 = "Message from mid2";
  res.send({
    message1: req.message1,
    messagex: req.messagex,
    message2: req.message2,
  });
  next();
};
*/

/*
const middleware1 = (req, res, next) => {
  console.log("mid1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("mid2");
  // res.send("test");
  next();
};

app.use(middleware1, middleware2);

app.get("/", (req, res) => {
  res.send({
    message: "get",
  });
});
*/

// app.get("/", [middleware1, middleware2]);

const middlewares = require("./middlewares/index");

app.get(
  "/",
  middlewares.middleware1,
  middlewares.middleware2,
  middlewares.middleware3,
  (req, res) => {
    res.send({
      message: "get",
    });
  }
);

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
