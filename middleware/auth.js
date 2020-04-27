const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
    // Set token from cookie
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    // Verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // get the payload from the jwt
    // find the corresponding user in the database
    // set the req.user to the user object returned by the database
    req.user = await User.findById(decoded.id);
    //console.log(`user:${req.user}`);
    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

// Grant access to specific roles

exports.authorize = (...roles) => {
  return (req, res, next) => {
    // check if given user is authorized to do this
    if (!roles.includes(req.user.role)) {
      // 403 forbidden error
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized ot access this route`,
          403
        )
      );
    }
    next();
  };
};
