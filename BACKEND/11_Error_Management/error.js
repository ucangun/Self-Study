/* ------------------------------------------------
            Error Handling in Node.js
---------------------------------------------------*/

/*
npm init-y 
npm i express dotenv
cat > .gitignore (kopyalanan verileri terminale yapistir ardindan ctrl + c ile cikis yap )
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------*

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    res.errorStatusCode = 400;
    throw new Error("Invalid ID: ID should be a number", {
      cause: "params.id",
    });
  } else {
    res.send({
      error: false,
      message: "User found",
      id,
    });
  }
});

/*---------------------------------------------------

// TRY - CATCH

app.get("/user/:id", (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      res.errorStatusCode = 400;
      throw new Error("Invalid ID: ID should be a number", {
        cause: "params.id",
      });
    } else {
      res.send({
        error: false,
        message: "User found",
        id,
      });
    }
  } catch (error) {
    next(error);

    // const statusCode = res?.errorStatusCode ?? 500;

    //   res.status(statusCode).send({
    //     error: true,
    //     message: error.message,
    //     cause: error.cause,
    //   });
  }
});

/*---------------------------------------------------*

// ASYNC

const asyncFunction = async () => {
  throw new Error("This error message from async function !", {
    cause: "This is async cause message",
  });
};

app.get("/async", async (req, res, next) => {
  await asyncFunction().catch(next);

  res.send({
    error: false,
    message: "Async function executed",
  });
});
/*---------------------------------------------------*/

const asyncFunction = async () => {
  throw new Error("This error message from async function !", {
    cause: "This is async cause message",
  });
};

app.get("/async", async (req, res, next) => {
  try {
    await asyncFunction();
    res.send({
      error: false,
      message: "Async function executed",
    });
  } catch (error) {
    next(error);
  }
});

const errorHandler = (error, req, res, next) => {
  const statusCode = res?.errorStatusCode ?? 500;
  // console.error(error.message);
  res.status(statusCode).send({
    error: true,
    message: error.message,
    cause: error.cause,
  });
};

app.use(errorHandler);

/*---------------------------------------------------*/

app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`));
