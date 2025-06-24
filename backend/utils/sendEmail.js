import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or your SMTP provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"ZaiQa App" <zaiqafastfood000@gmail.com>' <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};

export default sendEmail;
