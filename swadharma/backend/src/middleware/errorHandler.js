const notFound = (req, res, next) => {
res.status(404);
next(new Error(`Not Found - ${req.originalUrl}`));
};


// Central error handler
// Mirrors Flask flash/log + returns JSON for SPA/React
//
// If you want error shapes compatible with your frontend, tweak here.
const errorHandler = (err, req, res, _next) => {
const status = res.statusCode !== 200 ? res.statusCode : 500;
const payload = {
message: err.message || 'Server error'
};
if (process.env.NODE_ENV !== 'production') payload.stack = err.stack;
console.error('❌ ERROR:', err);
res.status(status).json(payload);
};


module.exports = { notFound, errorHandler };