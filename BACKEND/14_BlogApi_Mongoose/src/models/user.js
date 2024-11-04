/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { Schema, model } = require("mongoose");

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
