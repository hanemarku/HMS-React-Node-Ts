export const FRONTEND_URL = process.env.FRONTEND_URL!;
import nodemailer from "nodemailer";

const testAccount = {
  user: "mupacauxp4mgw2mi@ethereal.email",
  pass: "eQVNHXGY9NFcWYzMWB",
};

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});