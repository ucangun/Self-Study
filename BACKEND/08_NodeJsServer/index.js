"use strict";
/* -------------------------------------------- *
                       NodeJs Server
/* -------------------------------------------- */

require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// HTTP SERVER:
const http = require("node:http"); // built in module

/* -------------------------------------------- *

//http.createServer((req, res) => {});


const app = http.createServer((req, res) => {
  res.end("Hello World response end");
  console.log("Hello from console");
});

// DEFAULT server domain (local domain) => localhost : 127.0.0.1
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});


/* -------------------------------------------- *

http
  .createServer((req, res) => {
    console.log(req.url);

    if (req.url == "/") {
      res.end("<h1>Home Page</h1>");
    } else if (req.url == "/about") {
      res.end("<h1>About Page</h1>");
    } else {
      res.end("<h1>This is any Page</h1>");
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });


/* -------------------------------------------- */

http
  .createServer((req, res) => {
    /* res.write('<h1>this is write - 1 </h1>')
     res.write('<h1>this is write - 2 </h1>')
     res.write('<h1>this is write - 3 </h1>')
     res.write('<h1>this is write - 4 </h1>') */

    if (req.method == "GET") {
      // setHeader (single header method)
      res.setHeader("title", "value");

      // writeHead ( statusCode, statusMessage, {multi headers})
      res.writeHead(200, {
        "content-encoding": "utf-8",
        "multi-headers-exp": "test header value",
      });

      const obj = {
        result: true,
        message: "Hello world!",
      };

      res.write(JSON.stringify(obj));
      res.end();
    } else {
      res.writeHead(400);
      res.end("Wrong Method!");
    }
  })
  .listen(PORT, () =>
    console.log(`Server is running at : http://${HOST}:${PORT}`)
  );
/* -------------------------------------------- */
