"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

// npm i nodemailer

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {
  //* GoogleMail (gmail)
  //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ucangun76@gmail.com",
      pass: "xtcg irat zdvc ywul",
    },
  });

  // SendMail:
  transporter.sendMail(
    {
      from: "alidrl26@gmail.com",
      to: to,
      subject: subject,
      text: message,
      html: message,
    },
    function (error, success) {
      success ? console.log("SUCCESS:", success) : console.log("ERROR:", error);
    }
  );
};

/* ------------------------------------------------------- */

//* Create Test Account

// nodemailer.createTestAccount().then((data) => console.log(data));

// /*
// {
//     user: 'wd45z7xxh7cep2kx@ethereal.email',
//     pass: '4mkvFJwb4sEZa8BSxv',
//     smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//     imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//     pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//     web: 'https://ethereal.email',
//     mxEnabled: false
//   }
// */

// // Connect to MailServer / SMTP
// const transporter = nodemailer.createTransport({
//   // SMTP
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "wd45z7xxh7cep2kx@ethereal.email",
//     pass: "4mkvFJwb4sEZa8BSxv",
//   },
// });

// // console.log(transporter);

// const mailOptions = {
//   from: "wd45z7xxh7cep2kx@ethereal.email",
//   to: "ucangun76@gmail.com",
//   subject: "Hello World!",
//   text: "Hello there , how are you ?",
//   html: "<p><b>Hello There</b> <br> How are you ? </p>",
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   err
//     ? console.error("Hata oluştu:", err)
//     : console.log(
//         "E-posta gönderildi:",
//         info.messageId,
//         "\nE-posta önizleme URL:",
//         nodemailer.getTestMessageUrl(info)
//       );
// });

/* ------------------------------------------------------- */
