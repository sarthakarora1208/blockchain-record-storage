const asyncHandler = require('./async');
const { getMe } = require('../API/authRequests');

exports.checkIfAuthenticated = asyncHandler(async (req, res, next) => {
  //console.log('Token is' + req.cookies['token']);
  //let token = req.cookies['token'];
  //if (!token) {
   // req.flash('error_message', 'Please log in to view that resouce');
   // res.redirect('/auth/login');
 // } else {
    try {
      data = await getMe();
      req.user = data.data;
      next();
    } catch (error) {
      console.log(error);
      req.flash('error_message', 'Unauthorized to visit');
      res.redirect('/auth/login');
    }

  //}
});