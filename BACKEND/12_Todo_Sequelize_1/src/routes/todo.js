"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const {
  list,
  create,
  read,
  update,
  delete: deleteTodo,
} = require("../controllers/todo");

// const todo = require("../controllers/todo");

// List Todo:

router.get("/todo", list);

// Crud Operations - Create - Read - Update - Delete //

// Create Todo
router.post("/todo", create);

// Read Todo
router.get("/todo/:id", read);

// Update Todo
router.put("/todo/:id", update);

// Delete Todo
router.delete("/todo/:id", deleteTodo);

module.exports = router;
