"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// Authentication Control Middleware:

module.exports = (req, res, next) => {
  req.user = null;

  const auth = req.headers.authorization || null;

  console.log(auth);

  next();
};
