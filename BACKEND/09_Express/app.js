"use strict";

/**********************************************************/

//* Express.js

// npm init  -y
// npm install express
// npm install dotenv

//? Express server start

const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // .env deki tüm degiskenler process env ye alinir

// console.log(process.env);

const app = express(); // express üzerine server calistir

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// app.listen (8000)
app.listen(PORT, () =>
  console.log(`Server is running on http://${HOST}:${PORT}`)
);
