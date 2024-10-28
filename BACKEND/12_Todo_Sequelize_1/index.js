"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("express-async-errors");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const DB_PATH = process.env.DB_PATH || "./db.sqlite3";
const DB_NAME = process.env.DB_NAME || "sqlite";

/* ------------------------------------------------------- */

// Accept json data:
app.use(express.json());

/*
app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});
*/

/* ------------------------------------------------------- */

// Sequlize
const { Sequelize, DataTypes } = require("sequelize");

// Creating new instance
const sequelize = new Sequelize(`${DB_NAME}:${DB_PATH}`); // define your db and the path

//* Crerating Model
// sequelize.define("modelName", { fields});

const Todo = sequelize.define("todos", {
  /*
  id: {
    // this att. created auto
    type: DataTypes.INTEGER,
    allowNull: false, // default : true
    unique: true, // default : false
    comment: "this is comment",
    primaryKey: true, // default : false
    autoIncrement: true, // default : false
    field: "custom_name",
    defaultValue: 0, // default : null
  },*/
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: DataTypes.TEXT, //shorthand using

  priority: {
    // -1: low , 0: normal , 1:high
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  // No need to define createdAt and updatedAt (auto)
});

/* ------------------------------------------------------- */

// Sync - Just execute once to update model then comment again

//sequelize.sync(); // executing model
//sequelize.sync({ force: true }); // drop table and create new
// sequelize.sync({ alter: true }); // to backup & drop table & create new table from backup
// sequelize.sync({ alter: true }); // to backup & drop table & create new table from backup

/* ------------------------------------------------------- */

// Connecting to DB

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

/* ------------------------------------------------------- */

//* Routes

const router = express.Router();

// List Todo:

router.get("/todo", async (req, res) => {
  // const result = await Todo.findAll();
  const result = await Todo.findAndCountAll();

  res.status(200).send({
    error: false,
    data: result,
  });
});

// Crud Operations - Create - Read - Update - Delete //

// Create Todo
router.post("/todo", async (req, res) => {
  const result = await Todo.create(req.body);

  res.status(201).send({
    error: false,
    data: result,
  });
});

// Read Todo
router.get("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Todo.findByPk(id);

  if (result) {
    res.status(200).send({
      error: false,
      message: "Todo found successfully",
      data: result,
    });
  } else {
    res.errorStatusCode = 404;
    throw new Error("Todo not found");
  }
});

// Update Todo
router.put("/todo/:id", async (req, res) => {
  const id = req.params.id;

  const [updated] = await Todo.update(req.body, { where: { id } });

  if (updated) {
    const updatedTodo = await Todo.findOne({ where: { id } });
    res.status(202).send({
      error: false,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } else {
    res.errorStatusCode = 404;
    throw new Error("Todo not found");
  }
});

// Delete Todo
router.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Todo.destroy({ where: { id } });

  if (deleted) {
    return res.status(204).send();
  } else {
    res.errorStatusCode = 404;
    throw new Error("Todo not found");
  }
});

/* ------------------------------------------------------- *
router
  .route("/todo")
  .get(async (req, res) => {
    const result = await Todo.findAndCountAll();
    res.status(200).send({
      error: false,
      data: result,
    });
  })
  .post(async (req, res) => {
    const result = await Todo.create(req.body);
    res.status(201).send({
      error: false,
      data: result,
    });
  });

router
  .route("/todo/:id")
  .put(async (req, res) => {
    const id = req.params.id;
    const [updated] = await Todo.update(req.body, { where: { id } });

    if (updated) {
      const updatedTodo = await Todo.findOne({ where: { id } });
      res.status(200).send({
        error: false,
        message: "Todo updated successfully",
        data: updatedTodo,
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Todo not found",
      });
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const deleted = await Todo.destroy({ where: { id } });

    if (deleted) {
      return res.status(204).send();
    } else {
      res.status(404).send({
        error: true,
        message: "Todo not found",
      });
    }
  });
/* ------------------------------------------------------- */

app.use(router);

/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
  const statusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(statusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
