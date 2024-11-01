"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { BlogCategory, BlogPost } = require("../models/blog");

// Blog Category Controller

module.exports.blogCategory = {
  list: async (req, res) => {
    const categories = await BlogCategory.find();
    res.status(200).send(categories);
  },
  create: async (req, res) => {
    const result = await BlogCategory.create(req.body);

    res.status(201).send({
      message: "Blog Category created successfully",
      data: result,
    });
  },
  read: async (req, res) => {
    const category = await BlogCategory.findById(req.params.id);
    if (!category) {
      throw new Error("Category not found");
    }
    res.status(200).send(category);
  },

  update: async (req, res) => {},
  delete: async (req, res) => {},
};

/*************************************************** */

// Blog Post Controller

module.exports.blogPost = {};
