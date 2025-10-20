module.exports = function requestLogger(req, _res, next) {
const entry = {
method: req.method,
path: req.originalUrl,
body: req.body || {},
query: req.query || {}
};
console.log('➡️ REQUEST', JSON.stringify(entry));
next();
};