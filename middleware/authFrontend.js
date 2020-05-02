const asyncHandler = require('./async');
const jwt = require('jsonwebtoken');
const {getMe} = require('../API/authRequests')

exports.checkIfAuthenticated = asyncHandler(async(req,res,next) => {
   //console.log("middleware");
   const token = req.cookies['token']
   //console.log("Token from cookie is");
   //console.log(token)

   if(!token){
    console.log("Token not found")
    req.flash('error_msg', 'Please log in to view that resource');
    res.redirect('/users/login');
   }
   try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const data = await getMe(token);
    console.log(data);
    let user = data.data;
    console.log(user)
    req.user = user;
    next()

   } catch(error){
      console.log(error);
      req.flash('error_message', 'Unauthorized to visit')
      res.redirect('/auth/login');
    }
})