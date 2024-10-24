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
app.use(express.json()); // parse data which is coming in body
app.use(express.text()); // parse data which is coming in text
app.use(express.urlencoded()); // parse data which is coming in Form-encode

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
