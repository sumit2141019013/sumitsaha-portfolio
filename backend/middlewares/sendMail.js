import { createTransport } from "nodemailer";

export const sendMail = async (text) => {
  const transporter = createTransport({
    // var transport = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      //   user: "466e7843416d05",
      //   pass: "f4f5b6d9451e14"
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    }
  });




  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MY_MAIL,
    from: process.env.MY_MAIL,
    text,
  });
};