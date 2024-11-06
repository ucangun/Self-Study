"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require("../models/user");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email }); // check data from database
      if (user) {
        // password === sifrelenmeFonksiyonu(password)
        if (user.password === passwordEncrypt(password)) {
          //Session
          req.session._id = user._id;
          req.session.password = user.password;

          // Cookie
          if (req.body.rememberMe === true) {
            req.sessionOptions.maxAge = 100 * 60 * 60 * 24 * 2;
          }

          res.status(202).send({
            error: false,
            message: "Login Success",
            data: user,
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("Wrong password or email.");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong password or email.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password required!");
    }
  },

  logout: async (req, res) => {
    req.session = null;

    res.status(200).send({
      error: false,
      message: "Logout Success",
    });
  },
};
