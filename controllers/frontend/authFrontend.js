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
  const { email , password } = req.body;
  try {
    let data = await login(req.body);
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
      res.render('login.ejs',{email,password});
    }
  }
});

exports.getRegister = asyncHandler(async (req, res, next) => {
  res.render('register.ejs');
});

exports.postRegister = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, publicKey } = req.body;
  try {
    let errors = [];

    if (!name || !email || !password || !passwordConfirmation || !role  ) {
      errors.push({ msg: 'Please enter all fields' });
    }

    if (password != passwordConfirmation) {
      errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
    if (errors.length > 0) {
      res.render('register.ejs', {
        errors,
        name,
        email,
        password,
        passwordConfirmation
      });
    } else {
      let user = await register(req.body);
      console.log(user)
      const { success, data} = user;
      if (success) {
        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/auth/login');
      }
    }
  } catch (error) {
    if (error.response) {
      req.flash('error_msg', error.response.data);
      res.render('register.ejs', {
        errors,
        name,
        email,
        password,
        passwordConfirmation
      });
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
