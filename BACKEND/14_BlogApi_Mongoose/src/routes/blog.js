"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const express = require("express");
const router = express.Router();

const { blogCategory, blogPost } = require("../controllers/blog");

router.route("category").post(blogCategory.create);

module.exports = router;
