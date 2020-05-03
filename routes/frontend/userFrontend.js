const express = require('express');
const {
  dashboard,
  getRequestData,
  postRequestData,
  deleteRequestData
} = require('../../controllers/frontend/userFrontend');
const { checkIfAuthenticated } = require('../../middleware/authFrontend');

const router = express.Router();

router.route('/dashboard').get(checkIfAuthenticated, dashboard);
router
  .route('/request-data')
  .get(checkIfAuthenticated, getRequestData)
  .post(postRequestData);
router.route('/delete').post(deleteRequestData);
module.exports = router;
