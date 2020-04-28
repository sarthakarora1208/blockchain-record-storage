const asyncHandler = require('../../middleware/async');

exports.dashboard = asyncHandler(async (req, res, next) => {
  res.render('user-dashboard.ejs');
});

exports.requestData = asyncHandler(async (req, res, next) => {
  res.render('request-data.ejs');
});
