"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { BlogCategory, BlogPost } = require("../models/blog");

// Blog Category Controller

module.exports.blogCategory = {
  list: async (req, res) => {
    const categories = await BlogCategory.find();
    res.status(200).send({
      error: false,
      message: "Blog Categories",
      data: categories,
    });
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
    res.status(200).send({
      error: false,
      message: "Blog Category",
      data: category,
    });
  },

  update: async (req, res) => {
    const category = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }
    res.status(202).send({
      message: "Blog Category updated successfully",
      data: category,
    });
  },

  delete: async (req, res) => {
    const category = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }
    res.status(204).send({
      message: "Blog Category deleted successfully",
    });
  },
};

/*************************************************** */

// Blog Post Controller

module.exports.blogPost = {
  list: async (req, res) => {
    const result = await BlogPost.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await BlogPost.findById(req.params.categoryId);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    const { postId } = req.params;

    const updatedData = await BlogPost.findByIdAndUpdate(postId, req.body, {
      new: true,
    });

    res.status(202).send({
      error: false,
      updatedData,
    });
  },

  delete: async (req, res) => {
    const { deletedCount } = await BlogPost.deleteOne({
      _id: req.params.categoryId,
    });

    if (deletedCount) res.sendStatus(204);
    else throw new Error("Something went wrong!");
  },
};
