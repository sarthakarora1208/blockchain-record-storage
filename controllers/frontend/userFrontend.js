const asyncHandler = require('../../middleware/async');
const {
  getPatientDataRequestForUser,
  addPatientDataRequest,
} = require('../../API/patientDataRequests');
const { getApprovedHospitals } = require('../../API/hospitalRequests');
const { getMe } = require('../../API/authRequests');

exports.dashboard = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies['token'];
    const userData = await getMe(token);
    let user = userData.data;

    let data = await getPatientDataRequestForUser(token);
    // if already has made a request
    if (data.length === 1) {
      res.render('user-dashboardNext.ejs', {
        user,
        pdRequest: data[0],
      });
    } else {
      // if the request is not made yet
      res.render('user-dashboardFirst.ejs', { user });
    }
  } catch (error) {
    console.log(error);
    if (error.response) {
      req.flash('error_msg', error.response.data.error);
      res.redirect('/auth/login');
    }
  }
});

exports.getRequestData = asyncHandler(async (req, res, next) => {
  let hospitals = [];
  try {
    const userData = await getMe(token);
    let user = userData.data;
    let data = await getApprovedHospitals();
    const hospitals = [...data.data];
    res.render('user-request-data.ejs', {
      user,
      hospitals,
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      req.flash('error_msg', error.response.data.error);
      res.redirect('/users/dashboard');
    }
  }
});

exports.postRequestData = asyncHandler(async (req, res, next) => {
  const { hospitalId, comment } = req.body;
  console.log('Hospital Id' + hospitalId);
  try {
    let data = await addPatientDataRequest(
      hospitalId,
      { comment },
      req.cookies['token']
    );
    console.log(data);
    res.redirect('/users/dashboard');
  } catch (error) {
    console.log(error);
    console.log(error);
    if (error.response) {
      req.flash('error_msg', error.response.data.error);
      res.redirect('/users/request-data');
    }
  }
});
