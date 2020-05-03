const express = require('express');
const {
  getPatientDataRequest,
  getPatientDataRequests,
  addPatientDataRequest,
  getPatientDataRequestForUser,
  approvePatientDataRequest,
  addDataToSheet,
  deletePatientDataRequest
} = require('../controllers/patientDataRequests');

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require('../middleware/auth');
//const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(getPatientDataRequests)
  .post(protect, authorize('user'), addPatientDataRequest);

router
  .route('/user')
  .get(protect, authorize('user'), getPatientDataRequestForUser);

router.route('/:id').get(getPatientDataRequest).delete(protect,authorize('user'),deletePatientDataRequest)

router
  .route('/:id/approve')
  .put(protect, authorize('owner'), approvePatientDataRequest);

router
  .route('/:id/addtosheets')
  .put(protect, authorize('owner'), addDataToSheet);
module.exports = router;
