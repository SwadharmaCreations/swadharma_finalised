const router = require('express').Router();


router.get('/health', (req, res) => res.json({ ok: true }));


// Contact form endpoint replacing Flask `/contactus`
router.use('/contact', require('./contact.routes'));


// Optional: lightweight placeholders for your old pages —
// these return JSON now; React will render real pages later.
router.get('/pages/landing', (_req, res) => res.json({ view: 'mainpage' }));
router.get('/pages/about', (_req, res) => res.json({ view: 'aboutus' }));
router.get('/pages/services', (_req, res) => res.json({ view: 'services' }));
router.get('/pages/work', (_req, res) => res.json({ view: 'workpage' }));


module.exports = router;