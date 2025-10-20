const { z } = require('zod');


const email = z
.string()
.min(1, 'email is required')
.email('invalid email');


const contactSchema = z.object({
body: z.object({
name: z.string().min(1, 'name is required').max(200),
email: email,
subject: z.string().min(1, 'subject is required').max(300),
message: z.string().min(1, 'message is required').max(5000),
// Optional CAPTCHA token from client (hCaptcha or reCAPTCHA)
captchaToken: z.string().min(1).optional()
}),
query: z.object({}).passthrough(),
params: z.object({}).passthrough()
});


module.exports = { contactSchema };