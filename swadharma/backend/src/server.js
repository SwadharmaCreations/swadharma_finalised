require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db.js');
const { notFound, errorHandler } = require('./middleware/errorHandler.js');
const requestLogger = require('./middleware/logger.js');

const app = express();

// If behind a proxy (Heroku/Render/Nginx), enable so rate-limit & IPs work
app.set('trust proxy', 1);

// --- CORS (allow dev frontend on any origin; lock down later if needed) ---
const corsOptions = {
  origin: true,          // reflect request origin
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false,    // no cookies in this app
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));
// (Express 5) No need for explicit app.options('*'); cors() handles preflight

// --- Security + logging + body parsing ---
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' })); // optional, safe to keep
app.use(morgan('dev'));
app.use(requestLogger);

// --- Routes ---
app.use('/api', require('./routes/index.js'));

// 404 + centralized error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
  });
