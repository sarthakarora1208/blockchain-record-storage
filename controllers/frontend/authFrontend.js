const asyncHandler = require('../../middleware/async');
const axios = require('axios').default;
const {
  getMe,
  login,
  logout,
  register,
  forgotPassword,
} = require('../../API/authRequests');
const setAuthToken = require('../../API/setAuthToken');

exports.getLogin = asyncHandler(async (req, res, next) => {
  res.render('login.ejs');
});
exports.postLogin = asyncHandler(async (req, res, next) => {
  try {
    //let data = await login(req.body);
    let data = await login({ email: 'owner2@gmail.com', password: '123456' });
    const { success, token } = data;
    await setAuthToken(token);
    data = await getMe();
    let user = data.data;
    //console.log(user);
    if (user.role === 'user') {
      res.redirect('/users/dashboard');
    } else if (user.role === 'owner') {
      res.redirect('/hospitals/dashboard');
    } else {
      res.redirect('/admin/dashboard');
    }
  } catch (error) {
    console.log(error);
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.redirect('/auth/login');
    }
  }
});

exports.getRegister = asyncHandler(async (req, res, next) => {
  res.render('register.ejs');
});

exports.postRegister = asyncHandler(async (req, res, next) => {
  try {
    //const { name, email, password, role, publicKey } = req.body;
    let data = await register({
      name: 'sarthakarora',
      email: 'sarthakarora1208@gmail.com',
      password: '123456',
      role: 'owner',
      publicKey: 'publickeyexample',
    });

    const { success } = data;
    if (success) {
      req.flash('success_msg', 'You are now registered and can log in');
      res.redirect('/auth/login');
    }
  } catch (error) {
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.redirect('/auth/register');
      // res.render(register.ejs, { name, email, password, role, publicKey });
    }
  }
});

exports.getForgotPassword = asyncHandler(async (req, res, next) => {
  res.render('forgot-password.ejs');
});

exports.postLogout = asyncHandler(async (req, res, next) => {
  //let data = await
});
