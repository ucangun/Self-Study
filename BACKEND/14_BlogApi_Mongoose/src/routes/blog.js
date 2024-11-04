"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const express = require("express");
const router = express.Router();

const { blogCategory, blogPost } = require("../controllers/blog");

router.route("/category").get(blogCategory.list).post(blogCategory.create);

router
  .route("/category/:id")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .patch(blogCategory.update)
  .delete(blogCategory.delete);

/************************************************/

router.route("/post").get(blogPost.list).post(blogPost.create);

router
  .route("/post/:id")
  .get(blogPost.read)
  .put(blogPost.update)
  .patch(blogPost.update)
  .delete(blogPost.delete);

module.exports = router;
