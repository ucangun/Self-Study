"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const express = require("express");
const router = express.Router();

const { blogCategory, blogPost } = require("../controllers/blog");

router.route("/category").get(blogCategory.list).post(blogCategory.create);

router.route("/category/:id").get(blogCategory.read);

module.exports = router;
