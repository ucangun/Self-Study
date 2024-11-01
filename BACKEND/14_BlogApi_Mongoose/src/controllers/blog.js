"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { BlogCategory, BlogPost } = require("../models/blog");

// Blog Category Controller

module.exports.blogCategory = {
  list: async (req, res) => {},
  create: async (req, res) => {
    const result = BlogCategory.create(req, body);

    res.status(201).send({
      message: "Blog Category created successfully",
      data: result,
    });
  },
  read: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};

/*************************************************** */

// Blog Post Controller

module.exports.blogPost = {};
