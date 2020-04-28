const express = require('express');
const {
  addHospital,
  addPatientData,
  dashboard,
} = require('../../controllers/frontend/hospitalFrontend');

const router = express.Router();

router.route('/dashboard').get(dashboard);
router.route('/add-hospital').get(addHospital);
router.route('/add-patient-data').get(addPatientData);

module.exports = router;
