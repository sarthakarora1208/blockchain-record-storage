const asyncHandler = require('../../middleware/async');
exports.dashboard = asyncHandler(async (req, res, next) => {
  res.render('admin-dashboard.ejs');
});
