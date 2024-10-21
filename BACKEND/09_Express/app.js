"use strict";

/**********************************************************/

//* Express.js

// npm init  -y
// npm install express
// npm install dotenv

//? Express server start

const express = require("express");
const app = express(); // express üzerine server calistir

// app.listen (8000)

app.listen(8000, () => console.log("Server is running"));
