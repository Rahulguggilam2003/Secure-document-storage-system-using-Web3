const nodemailer = require('nodemailer');

const sendEmail = async (email, fileHash) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: 'rahulguggilam2003@gmail.com',
      pass: 'rahul.1082003',
    },
  });

  const mailOptions = {
    from: 'rahulguggilam2003@gmail.com',
    to: email,
    subject: 'File Uploaded to Pinata',
    text: `Your file has been successfully uploaded to Pinata!\n\nFile Hash: ${fileHash}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent successfully!');
      alert("Email sent")
    }
  });
};

module.exports = {
  sendEmail,
};
