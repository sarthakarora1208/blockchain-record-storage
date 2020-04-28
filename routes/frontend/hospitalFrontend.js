const express = require('express');
const router = express.Router();

router.route('/add-hospital').get();
router.route('/admin-dashboard').get();
router.route('/hospital-dashboard').get();

module.exports = router;
