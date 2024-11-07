"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const { BlogCategory, BlogPost } = require("../models/blog");

// Blog Category Controller

module.exports.blogCategory = {
  list: async (req, res) => {
    // const result =await BlogCategory.find({...filter} , {...select})
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
    //  FILTERING & SEARCHING & SORTING & PAGINATION

    // console.log("line 79 => ", req.query);

    //* FILTERING
    // URL?filter[fieldName1]=value1&filter[fieladName2]=value2
    const filter = req.query?.filter || {};

    //* SEARCHING
    // URL?search[fieldName1]=value1&search[fieldName2]=value2
    // { "<field>": { "$regex": "pattern", "$options": "<options>" } }

    const search = req.query?.search || {};

    for (let key in search) {
      search[key] = { $regex: search[key] };
      // console.log(search[key]);
    }

    //* SORTING
    // URL?sort[fieldName]=asc&sort[fieldName2]=desc

    const sort = req.query?.sort || {};

    //* LIMIT

    const limit = req.query?.limit || 20;
    console.log(limit);

    //* PAGINATION
    // URL?page=2&limit=10

    const page = Number(req.query.page) || 1;
    const skip = (page - 1) * limit;

    console.log("line 101 => ", req.query);

    const result = await BlogPost.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit);

    // SELECT & POPULATE
    // const result =await BlogCategory.find({...filter} , {...select})
    // const result = await BlogPost.find(
    //   {},
    //   { categoryId: 1, title: 1, content: 1, _id: false }
    // ).populate("categoryId");
    // const result = await BlogPost.find();

    res.status(200).send({
      error: false,
      page,
      limit,
      results: result.length,
      data: result,
    });
  },

  create: async (req, res) => {
    req.body.userId = req.user._id;
    const result = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await BlogPost.findById(req.params.id);

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
      _id: req.params.id,
    });

    if (deletedCount) res.sendStatus(204);
    else throw new Error("Something went wrong!");
  },
};
