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

// request and response
// app.get("/", (req, res) => {
//1
// res.write("Clarusway");
// res.end();
//2
// res.write(
//   JSON.stringify({
//     // objeyi direk basamaz
//     message: "Umut",
//   })
// );
// res.end();
//3
// res.send(
//   JSON.stringify({
//     message: "Umut",
//   })
// );
// });

/*
app.get("/", (req, res) => {
  res.send("method GET");
});

app.post("/", (req, res) => {
  res.send("method POST");
});

app.put("/", (req, res) => {
  res.send("method PUT");
});

app.patch("/", (req, res) => {
  res.send("method PATCH");
});

app.delete("/", (req, res) => {
  res.send("method DELETE");
});

app.all("/", (req, res) => {
  res.send("method ALL");
});
*/

/*
app.get("/abc", (req, res) => {
  res.send("Method GET");
});
*/

/*
app.get("/abc(x?)123", (req, res) => {
  res.send("Method GET");
}); // arada x olabilir / olmayabilir

app.get("/abc(x+)123", (req, res) => {
  res.send("Method GET");
}); // n adet x alabilir

app.get("/abc(*)123", (req, res) => {
  res.send("Method GET");
}); // arada ne olursa olsun

*/

// https://regexr.com/

/*
app.get(/abc/, (req, res) => {
  res.send("Method GET");
});
*/

// regexde pathe / ilave etme
// app.get(/abc/,(req,res)=>{ res.send( ' method GET') }) // tek tırnaklar yok , iki / arasında
// app.get(/abc/,(req,res)=>{ res.send( ' method GET') }) // abc içerirse
// app.get(/abc$/,(req,res)=>{ res.send( ' method GET') }) // abc onune ne gelirse gelsin ama en az bir karakter olsun
//app.get(/^\/abc/,(req,res)=>{ res.send( ' method GET') }) //  sonuna ne gelirse gelsin

// ? URL parametre

/*
app.get("/user/:userId/:name", (req, res) => {
  res.send({
    url: {
      protocol: req.protocol,
      secure: req.secure,
      url: req.url,
      originalURL: req.originalUrl, // hangi router da isek onu verir
      hostname: req.hostname,
      subdomain: req.subdomains,
      method: req.method,
      params: req.params,
      query: req.query,
    },
    id: req.params.userId,
  });
});
*/
// parametreler icin regex kullanabilirsiniz
// /user/:userId([0-9])/:name   user id sadece rakamlardan olusur

// ? Status Codes

// default status code 200

/*
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World" });
});

app.post("/", (req, res) => {
  res.status(201).send({ message: "Hello World" });
});
*/

//? Download
//get istedigi geldiginde app.js dosyasini indir

app.get("/download", (req, res) => {
  res.download("./app.js");
});

//? Show File Content

app.get("/show", (req, res) => {
  res.sendFile(__dirname + "/app.js");
});

// app.listen (8000)
app.listen(PORT, () =>
  console.log(`Server is running on http://${HOST}:${PORT}`)
);
