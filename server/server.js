// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000; // Choose a port for your server

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/send-email', async (req, res) => {
  const { recipientEmail, message } = req.body;

  // Replace these credentials with your actual email and password
  const emailUser = 'youremail';
  const emailPass = 'yourpasscode';

  // Set up nodemailer with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  // Define the email content
  const mailOptions = {
    from: emailUser,
    to: recipientEmail,
    subject: 'New file is pinned for you',
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
