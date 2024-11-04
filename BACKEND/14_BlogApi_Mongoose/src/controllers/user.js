"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    const users = await User.find();
    res.status(200).send({
      error: false,
      message: "Users",
      data: users,
    });
  },

  create: async (req, res) => {
    const result = await User.create(req.body);

    res.status(201).send({
      message: "User created successfully",
      data: result,
    });
  },

  read: async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).send({
      error: false,
      message: "User",
      data: user,
    });
  },

  update: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(202).send({
      message: "User updated successfully",
      data: user,
    });
  },

  delete: async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(204).send({
      message: "User deleted successfully",
    });
  },
};
