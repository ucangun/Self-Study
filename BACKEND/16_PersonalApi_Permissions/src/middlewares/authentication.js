"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const Token = require("../models/token");

// Authentication Control Middleware:

module.exports = async (req, res, next) => {
  req.user = null;

  const auth = req.headers.authorization || null;
  const tokenKey = auth ? auth.split(" ") : null;

  if (tokenKey && tokenKey[0] === "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "userId"
    );

    if (!tokenData) {
      res.errorStatusCode = 401;
      throw new Error("Invalid or expired token");
    }

    req.user = tokenData.userId;
    return next();
  } else {
    res.errorStatusCode = 400;
    throw new Error("Authorization token is missing or invalid format");
  }
};
