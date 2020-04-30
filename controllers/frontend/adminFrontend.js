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
  const { id } = req.params;
  console.log(id);

  try {
    const data = await approveHospital(id);
    console.log(data);
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.log(error);
    res.redirect('/auth/login');
  }
});
