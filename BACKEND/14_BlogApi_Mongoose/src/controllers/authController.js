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
          req.session.user = user;

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
