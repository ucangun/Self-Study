"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require("../models/user");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });

      if (user) {
        // password === sifrelenmeFonksiyonu(password)

        res.status(202).send({
          error: false,
          data: user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong password or email.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password required!");
    }
  },

  logout: async (req, res) => {},
};
