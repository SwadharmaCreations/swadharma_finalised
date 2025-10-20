// Zod validation middleware
module.exports = (schema) => (req, res, next) => {
try {
const parsed = schema.parse({
body: req.body,
query: req.query,
params: req.params
});
// Overwrite with parsed (optionally)
req.body = parsed.body;
req.query = parsed.query;
req.params = parsed.params;
next();
} catch (err) {
res.status(400).json({ message: 'Validation failed', issues: err.errors });
}
};