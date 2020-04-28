const asyncHandler = require('../../middleware/async');

exports.dashboard = asyncHandler(async (req, res, next) => {
  res.render('user-dashboard.ejs');
});

exports.addHospital = asyncHandler(async (req, res, next) => {
  res.render('hospital-dashboard');
});

exports.addPatientData = asyncHandler(async (req, res, next) => {
  res.render('add-patient-data');
});
