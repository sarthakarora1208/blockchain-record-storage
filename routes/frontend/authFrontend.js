const express = require('express');
const router = express.Router();

router.route('/login').get();
router.route('/register').get();
//router.route('/logout')

module.exports = router;
