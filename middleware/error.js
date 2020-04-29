const ErrorResponse = require('../utils/errorResponse');
const errorHandler = (err, req, res, next) => {
  // copying the error message to a new object
  let error = { ...err };
  // copying the message
  error.message = err.message;
  // console log for dev
  //   console.log(err.stack.red);
  //console.log(err);
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found `;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key
  if (err.code === 11000) {
    // same resource already exists
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    //mapping over all the values
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }
  // we get the statusCode from the instance variable of the Error Message Class
  // default status is 500 or Internal server error
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};
module.exports = errorHandler;
