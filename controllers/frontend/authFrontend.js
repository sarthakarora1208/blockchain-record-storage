const asyncHandler = require('../../middleware/async');
const axios = require('axios');
const {
  getMe,
  login,
  register,
  forgotPassword,
} = require('../../API/authRequests');
const { setAuthToken } = require('../../API/api');

exports.getLogin = asyncHandler(async (req, res, next) => {
  res.render('login.ejs');
});
exports.postLogin = asyncHandler(async (req, res, next) => {
  // console.log(req.body);
  //console.log(typeof req.body);
  try {
    //const data = axios.post('/api/v1/auth/login', {
    //  email: 'admin@gmail.com',
    //  password: '123456',
    //});
    const data = axios.get('/');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  //const data = await login({ email: 'admin@gmail.com', password: '123456' });
  //const { success, token } = data;
  let success = false;
  if (success) {
    await setAuthToken(token);
    const data = await getMe();
    //console.log('data from getME' + data);
    if (data.role === 'user') {
      res.redirect('/users/dashboard');
    } else if (data.role === 'owner') {
      res.redirect('/hospitals/dashboard');
    } else {
      res.redirect('/admin/dashboard');
    }
  }
});

exports.getRegister = asyncHandler(async (req, res, next) => {
  res.render('register.ejs');
});

exports.postRegister = asyncHandler(async (req, res, next) => {});

exports.getForgotPassword = asyncHandler(async (req, res, next) => {
  res.render('forgot-password.ejs');
});
