/* -------------------------------------------------------
            EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const crypto = require("crypto");

// paramaters

const keyCode = process.env.KEY_CODE; // secretKey
const loopCount = Number(process.env.LOOP_COUNT); // number if of loop
const charCount = Number(process.env.CHAR_COUNT); // write 32 for 64
const encType = process.env.ENC_TYPE || "sha512";

const passwordEncrypt = (password) => {
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
};

module.exports = passwordEncrypt;
