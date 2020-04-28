const express = require('express');
const {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  getForgotPassword,
} = require('../../controllers/frontend/authFrontend');

const router = express.Router();

router.route('/login').get(getLogin).post(postLogin);
router.route('/register').get(getRegister).post(postRegister);
router.route('/forgot-pasword').get(getForgotPassword);
//router.route('/logout')

module.exports = router;
