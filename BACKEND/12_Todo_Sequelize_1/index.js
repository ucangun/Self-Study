"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Accept json data:
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

/* ------------------------------------------------------- */

// Sequlize
const { Sequelize, DataTypes } = require("sequelize");

// Creating new instance
const sequelize = new Sequelize("sqlite:./db.sqlite3"); // define your db and the path

//* Crerating Model
// sequelize.define("modelName", { fields});

sequelize.define("todos", {
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
