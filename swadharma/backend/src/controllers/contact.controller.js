const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const { appendRow } = require('../config/googleSheets');
const { sendContactEmail } = require('../services/mailer');
const { verifyCaptchaIfEnabled } = require('../services/captcha');


exports.create = asyncHandler(async (req, res) => {
const { name, email, subject, message, captchaToken } = req.body || {};


// Optional CAPTCHA verification (hCaptcha or reCAPTCHA) controlled by env
await verifyCaptchaIfEnabled(captchaToken, req.ip);


// 1) save to MongoDB
const doc = await Contact.create({ name, email, subject, message, timestamp: new Date() });


// 2) write to Google Sheets (best-effort)
try {
await appendRow({
sheetId: process.env.SHEET_ID,
sheetName: process.env.SHEET_NAME,
values: [
new Date().toISOString().replace('T', ' ').slice(0, 19),
name,
email,
subject,
message
]
});
console.log('✅ DATA WRITTEN TO GOOGLE SHEETS');
} catch (err) {
console.error('❌ SHEETS ERROR:', err.message);
}


// 3) send email (best-effort)
try {
await sendContactEmail({ name, senderEmail: email, subject, message });
console.log('📧 EMAIL SENT');
} catch (err) {
console.error('❌ EMAIL ERROR:', err.message);
}


res.status(201).json({
message: 'Your message has been sent successfully!',
contact: {
id: doc._id,
name: doc.name,
email: doc.email,
subject: doc.subject,
message: doc.message
}
});
});