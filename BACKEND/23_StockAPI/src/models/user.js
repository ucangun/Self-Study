"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");

/* ----------------------------------------------------- *
{
  "username": "admin",
  "password": "aA?123456",
  "email": "admin@site.com",
  "firstName": "admin",
  "lastName": "admin",
  "isActive": true,
  "isStaff": true,
  "isAdmin": true
}
/* ----------------------------------------------------- */

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },

    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

/* ----------------------------------------------------- */

UserSchema.pre(["save", "updateOne"], function (next) {
  // run before saving db
  const data = this?._update ?? this;

  // Email Control
  const isEmailValidated = data.email
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    : true;

  if (!isEmailValidated) {
    next(new Error("Email is not validated"));
  }

  const isPasswordValidated = data.password
    ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.]).{8,}$/.test(
        data.password
      )
    : true;

  if (!isPasswordValidated) {
    next(
      new Error(
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character"
      )
    );
  }

  if (data.password) {
    if (this?._update) {
      this._update.password = passwordEncrypt(data.password);
    }
  } else {
    this.password = passwordEncrypt(data.password);
  }

  next();
});

module.exports = mongoose.model("User", UserSchema);
