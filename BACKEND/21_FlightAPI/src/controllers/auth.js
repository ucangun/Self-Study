"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
// Auth Controller:

const User = require("../models/user");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    const { userName, password, email } = req.body;

    if (!((userName || email) && password)) {
      res.errorStatusCode = 401;
      throw new Error("UserName/Email and Password required!");
    }

    const user = await User.findOne({ $or: [{ userName }, { email }] });

    if (user?.password !== passwordEncrypt(password)) {
      res.errorStatusCode = 401;
      throw new Error("Incorrect username/email or password.");
    }

    if (!user.isActive) {
      res.errorStatusCode = 401;
      throw new Error("This account is not active.");
    }
  },
};
