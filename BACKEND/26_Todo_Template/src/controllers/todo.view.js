"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//Model
const Todo = require("../models/todo");

const PRIORITIES = {
  "-1": "Low",
  0: "Normal",
  1: "High",
};

module.exports = {
  list: async (req, res) => {
    // const result = await Todo.findAll()
    const result = await Todo.findAndCountAll();

    res.render("index", {
      count: result.count,
      todos: result.rows,
      priorities: PRIORITIES,
    });
  },

  create: async (req, res) => {
    if (req.method == "POST") {
      const result = await Todo.create(req.body);
      res.redirect("/view");
    } else {
      res.render("todoCreate", { priorities: PRIORITIES });
    }
  },

  read: async (req, res) => {
    // const result = await Todo.findOne({ where: { id: req.params.id } })
    const result = await Todo.findByPk(req.params.id);

    res.render("todoRead", { todo: result, priorities: PRIORITIES });
  },

  update: async (req, res) => {
    // const result = await Todo.update({...newData},{...filter})
    const result = await Todo.update(req.body, {
      where: { id: req.params.id },
    });

    const isUpated = result[0];

    res.status(isUpated ? 202 : 404).send({
      error: isUpated ? false : true,
      message: isUpated ? "Updated" : "Something went wrong!",
      updatedData: isUpated && (await Todo.findByPk(req.params.id)),
    });
  },

  delete: async (req, res) => {
    const isDeleted = await Todo.destroy({ where: { id: req.params.id } });

    if (isDeleted) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Can not deleted! or Maybe already deleted.");
    }
  },
};
