const asyncHandler = require('../../middleware/async');
const {
  getPatientDataRequests,
  getPatientDataRequestById,
  approvePatientDataRequest,
} = require('../../API/patientDataRequests');
const { getHospitalForUser } = require('../../API/hospitalRequests');

exports.dashboard = asyncHandler(async (req, res, next) => {
  let pdRequests = [];
  try {
    let data = await getHospitalForUser();
    const hospital = data[0];
    console.log(data.length);
    // if already has made a request
    if (data.length === 1) {
      data = await getPatientDataRequests(hospital.id);
      console.log(data.length);

      pdRequests = [...data.data];

      res.render('hospital-dashboardNext.ejs', {
        user: req.user,
        pdRequests,
      });
    } else {
      res.render('hospital-dashboard.ejs', { user: req.user });
    }
  } catch (error) {
    console.log(error);
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.redirect('/auth/login');
    }
  }
});

exports.getAddHospital = asyncHandler(async (req, res, next) => {
  res.render('add-hospital', { user: req.user });
});

exports.postAddHospital = asyncHandler(async (req, res, next) => {
  try {
    const {
      name,
      email,
      description,
      phone,
      address,
      website,
      registrationNumber,
      publicKey,
    } = req.body;

    let data = await register({
      name: 'Bhopal Memorial Hospital​ And Research Centre',
      description:
        'BMHRC is a leading Multi-Speciality Hospital in Bhopal, known for its adoption of professional standards, Nationally & Internationally.',
      registrationNumber: 1111,
      website: 'https://chrcbhopal.com',
      phone: ': 0755 274 2212',
      email: 'mail@chrcbhopal.com',
      address:
        'Raisen Rd, near Best Price, BMHRC Campus, Karond, Bhopal, Madhya Pradesh 462038',
      publicKey: 'publicKey',
    });
    const { success } = data;
    if (success) {
      req.flash('success_msg', 'Hospital Added Successfully');
      res.redirect('/hospital/dashboard');
    }
  } catch (error) {
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.redirect('/auth/register');
      // res.render(register.ejs, { name, email, password, role, publicKey });
    }
  }
});

exports.getAddPatientData = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await getPatientDataRequestById(id);
    const { user, comment, hospital } = data.data;
    const { publicKey, name } = user;
    res.render('add-patient-data.ejs', { name, publicKey, comment, hospital });
  } catch (error) {
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.redirect('/hospitals/dashboard');
    }
  }
});

exports.postAddPatientData = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await approvePatientDataRequest(id);
    const { success } = data;
    if (success) {
      req.flash('success_msg', 'Request approved for patient');
      res.redirect('/hospitals/dashboard');
    }
  } catch (error) {
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.redirect('/hospitals/dashboard');
    }
  }
});
