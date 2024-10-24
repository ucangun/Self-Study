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

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  res.send({
    error: false,
    message: "User found",
    id,
  });
});

app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`));
