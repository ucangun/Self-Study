"use strict";

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

const router = require("./routers/index");

app.use(router);

app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
