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
    if (error.response) {
      req.flash('error_msg', error.response.data.error);
    }
    res.redirect('/auth/login');
  }
});

exports.approveHospital = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  try {
    const data = await approveHospital(id,req.cookies['token']);
    console.log(data);
    res.redirect('/admin/dashboard');
  } catch (error) {
    if (error.response) {
      req.flash('error_msg', error.response.data.error);
    }

    res.redirect('/admin/dashboard');
  }
});
