const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (for CSS, JS)
app.use(express.static('public'));

// reCAPTCHA secret key
const RECAPTCHA_SECRET_KEY = 'your-recaptcha-secret-key';

// Nodemailer setup
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Render the HTML form
app.get('/have-your-say', (req, res) => {
  res.sendFile(__dirname + '/public/have_your_say.html');
});

// Handle form submission
app.post('/have-your-say', async (req, res) => {
  const { product, user_name, 'g-recaptcha-response': recaptchaResponse } = req.body;

  // Verify reCAPTCHA
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;

  try {
    const recaptchaVerifyResponse = await axios.post(recaptchaUrl);
    const { success } = recaptchaVerifyResponse.data;

    if (!success) {
      return res.status(400).send('reCAPTCHA verification failed. Please try again.');
    }

    // Send email after reCAPTCHA passes
    let mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com',
      subject: 'New Vote on ARB Customs',
      text: `User ${user_name} voted for ${product}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Error sending email.');
      }
      res.send('Your vote has been submitted successfully.');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error verifying reCAPTCHA.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
