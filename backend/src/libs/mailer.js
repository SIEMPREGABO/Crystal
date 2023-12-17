import nodemailer from 'nodemailer'; 

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "gab.mirare@gmail.com",
    pass: "guox vknt dyzq axrg",
  },
});