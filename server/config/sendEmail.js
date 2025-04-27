const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  Port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMPT_PASS,
  },
});

module.exports = transporter;
