const express = require('express');
const {
  dashboard,
  approveHospital,
} = require('../../controllers/frontend/adminFrontend');
const { checkIfAuthenticated } = require('../../middleware/authFrontend');

const router = express.Router();

router.route('/dashboard').get(checkIfAuthenticated, dashboard);
router.route('/:id/approve').post(approveHospital);

module.exports = router;
