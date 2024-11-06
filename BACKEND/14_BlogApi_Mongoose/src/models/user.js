/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { Schema, model } = require("mongoose");
const passwordEncrypt = require("../helpers/passwordEncrypt");

/*************************************************** *

const crypto = require("crypto");

// paramaters

const keyCode = process.env.KEY_CODE; // secretKey
const loopCount = Number(process.env.LOOP_COUNT); // number if of loop
const charCount = Number(process.env.CHAR_COUNT); // write 32 for 64
const encType = process.env.ENC_TYPE;

const passwordEncrypt = (password) => {
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
};

/*************************************************** */

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      // validate: (email) => {
      //   if (email.includes("@") && email.includes(".")) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: true,
      /*************************************************** */

      // set: (password) => {
      //   return "customPassword";
      // },
      // validate: (password) => {
      //   if (password.length < 5) {
      //     return false;
      //   } else true;
      // },

      /*************************************************** *

      set: (password) => {
        if (password.length < 5) {
          return "InvalidPassword";
        } else {
          return passwordEncrypt(password);
        }
      },
      validate: (password) => {
        if (password === "InvalidPassword") {
          return false;
        } else true;
      },
      /*************************************************** */
      set: (password) =>
        password.length > 5 ? passwordEncrypt(password) : "InvalidPassword",
      validate: (password) => password !== "InvalidPassword",
    },

    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
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
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
