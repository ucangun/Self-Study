/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { Schema, model } = require("mongoose");

/*************************************************** */

const crypto = require("crypto");

// paramaters

const keyCode = "kjsndfkjsdnfklasjdsakjdnsakldj"; // secretKey
const loopCount = 10_000; // number if of loop
const charCount = 32; // write 32 for 64
const encType = "sha512";

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
      // set: (password) => {
      //   return "customPassword";
      // },
      set: (password) => {
        return passwordEncrypt(password);
      },
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
