const router = require('express').Router();
const rateLimit = require('express-rate-limit');
const ctrl = require('../controllers/contact.controller');
const validate = require('../middleware/validate');
const { contactSchema } = require('../validators/contact.schema');


// Rate limit: max 5 submissions per IP per minute
const contactLimiter = rateLimit({
windowMs: 60 * 1000,
max: 5,
standardHeaders: true,
legacyHeaders: false
});


router.post('/', contactLimiter, validate(contactSchema), ctrl.create);


module.exports = router;