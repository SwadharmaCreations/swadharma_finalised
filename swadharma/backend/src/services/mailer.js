const nodemailer = require('nodemailer');


function getTransport() {
const { YOUR_EMAIL, APP_PASSWORD } = process.env;
if (!YOUR_EMAIL || !APP_PASSWORD) {
throw new Error('YOUR_EMAIL or APP_PASSWORD not set');
}
return nodemailer.createTransport({
host: 'smtp.gmail.com',
port: 587,
secure: false,
auth: { user: YOUR_EMAIL, pass: APP_PASSWORD }
});
}


async function sendContactEmail({ name, senderEmail, subject, message }) {
const transporter = getTransport();
const to = process.env.YOUR_EMAIL;
const mail = {
from: to,
to,
subject: `New Contact Form Submission: ${subject}`,
text: `Name: ${name}\nEmail: ${senderEmail}\nSubject: ${subject}\nMessage:\n${message}`
};
await transporter.sendMail(mail);
}


module.exports = { sendContactEmail };