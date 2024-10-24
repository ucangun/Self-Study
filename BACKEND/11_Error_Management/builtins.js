"use strict";
/* ------------------------------------------------
            Express.js Built in Middlewares
---------------------------------------------------*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------*/

// Receiving Data
app.use(express.json());

app.all("/:id", (req, res) => {
  const { params, query, body, headers } = req;

  res.send({
    error: false,
    params,
    query,
    body,
    headers,
  });
});

app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`));
