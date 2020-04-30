const asyncHandler = require('../../middleware/async');
const {
  getUnapprovedHospitals,
  approveHospital,
} = require('../../API/hospitalRequests');
exports.dashboard = asyncHandler(async (req, res, next) => {
  let hospitals = [];
  try {
    const data = await getUnapprovedHospitals();
    const hospitals = [...data.data];
    res.render('admin-dashboard.ejs', {
      user: req.user,
      hospitals,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/auth/login');
  }
});

exports.approveHospital = asyncHandler(async (req, res, next) => {
  const { hosptialId } = req.body;
  try {
    const data = await approveHospital(hosptialId);
    console.log(data);
  } catch (error) {
    res.redirect('/auth/login');
  }
  res.redirect('/admin/dashboard');
});
