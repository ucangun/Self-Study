"use strict";
/* -------------------------------------------- *
                       NodeJs Server
/* -------------------------------------------- */

require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

console.log("Hello World", PORT, HOST);
