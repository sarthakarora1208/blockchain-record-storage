const express = require('express');
const Hospital = require('../models/Hospital');
const advancedResults = require('../middleware/advancedResults');

const {
  getHospital,
  getHospitals,
  getHospitalForUser,
  getUnapprovedHospitals,
  getApprovedHospitals,
  createHospital,
  updateHospital,
  approveHospital,
} = require('../controllers/hospitals');

const { protect, authorize } = require('../middleware/auth');

const patientDataRequestRouter = require('./patientDataRequests');

const router = express.Router();

router.use('/:hospitalId/pdrequests', patientDataRequestRouter);

router
  .route('/')
  .get(advancedResults(Hospital, 'user'), getHospitals)
  .post(protect, authorize('owner'), createHospital);

router.route('/approved').get(getApprovedHospitals);
router.route('/unapproved').get(getUnapprovedHospitals);
router.route('/user').get(protect, getHospitalForUser);

router
  .route('/:id')
  .get(getHospital)
  .put(protect, authorize('owner'), updateHospital);

router.route('/:id/approve').put(protect, authorize('admin'), approveHospital);

module.exports = router;
