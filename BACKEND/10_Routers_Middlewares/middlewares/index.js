"use strict";

/*
    EXPRESSJS MIDDLEWARE
*/

module.exports = {
  middleware1: (req, res, next) => {
    console.log("mid1");
    req.message1 = "Message from mid1";
    next();
  },
  middleware2: (req, res, next) => {
    console.log("mid2");
    req.message2 = "Message from mid2";
    next();
  },
  middleware3: (req, res, next) => {
    console.log("mid3");
    req.message3 = "Message from mid3";
    next();
  },
};
