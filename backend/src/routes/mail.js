import express from "express";
import { parseError } from "../util/helpers";
const nodemailer = require("nodemailer");

const prepareHtmlMessage = data => {
  const { firstname, lastname, room, email, subject, message } = data;

  let result = `<div style="margin-bottom: 1rem"> 
    <h1 style="margin-bottom: 0.2rem">Wiadomość z portalu</h1>
    <p style="margin: 0"> <strong>Imię i nazwisko: </strong> ${firstname} ${lastname} </p>
    <p style="margin: 0"> <strong>Pokój: </strong> ${room} </p>
    <p style="margin: 0"> <strong>Email: </strong> ${email} </p>
  </div>
  <div>
    <p style="margin: 0"> <strong>Temat:</strong> </p>
    <p style="margin-top: 0">${subject}</p>
    <p style="margin: 0"> <strong>Wiadomość:</strong> </p>
    <p style="margin-top: 0">${message}</p>
  </div>  
  `;
  return result;
};

const mailRoutes = express.Router();
mailRoutes.post("/send/to/rm", async (req, res) => {
  try {
    const { firstname, lastname, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    let info = await transporter.sendMail({
      from: '"' + firstname + " " + lastname + '" <' + email + ">",
      to: "7domstudenta@gmail.com",
      subject: "[Portal 7DS] " + subject,
      text: message,
      html: prepareHtmlMessage(req.body)
    });

    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res.status(400).send(parseError(err));
  }
});

mailRoutes.post("/send/to/internet", async (req, res) => {
  try {
    const { firstname, lastname, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    let info = await transporter.sendMail({
      from: '"' + firstname + " " + lastname + '" <' + email + ">",
      to: "7domstudenta@gmail.com",
      subject: "[Portal 7DS] " + subject,
      text: message,
      html: prepareHtmlMessage(req.body)
    });

    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res.status(400).send(parseError(err));
  }
});

mailRoutes.post("/send/to/dorm-administration", async (req, res) => {
  try {
    const { firstname, lastname, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    let info = await transporter.sendMail({
      from: '"' + firstname + " " + lastname + '" <' + email + ">",
      to: "7domstudenta@gmail.com",
      subject: "[Portal 7DS] " + subject,
      text: message,
      html: prepareHtmlMessage(req.body)
    });

    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res.status(400).send(parseError(err));
  }
});

export default mailRoutes;
