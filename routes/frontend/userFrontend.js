const express = require('express');
const {
  dashboard,
  getRequestData,
  postRequestData,
} = require('../../controllers/frontend/userFrontend');
const { checkIfAuthenticated } = require('../../middleware/authFrontend');

const router = express.Router();

router.route('/dashboard').get(checkIfAuthenticated, dashboard);
router
  .route('/request-data')
  .get(checkIfAuthenticated, getRequestData)
  .post(postRequestData);

module.exports = router;
