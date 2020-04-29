const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const errorHandler = require('./middleware/error.js');
const connectDB = require('./config/db');
const flash = require('connect-flash');
const session = require('express-session');

    

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const auth = require('./routes/auth');
const hopsitals = require('./routes/hospitals');
const pdRequests = require('./routes/patientDataRequests');

//Frontend Route files
const authFrontend = require('./routes/frontend/authFrontend');
const userFrontend = require('./routes/frontend/userFrontend');
const hospitalFrontend = require('./routes/frontend/hospitalFrontend');
const adminFrontend = require('./routes/frontend/adminFrontend');

const app = express();

// EJS
app.set('view engine', 'ejs');
// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Express body parser
app.use(express.urlencoded({ extended: true }));

//mounting public directory
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/auth/login'));
// Mount routers
app.use('/auth', authFrontend);
app.use('/users', userFrontend);
app.use('/hospitals', hospitalFrontend);
app.use('/admin', adminFrontend);
app.use('/api/v1/auth', auth);
app.use('/api/v1/hospitals', hopsitals);
app.use('/api/v1/pdrequests', pdRequests);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
