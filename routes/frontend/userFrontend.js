const express = require('express');
const {
  dashboard,
  requestData,
} = require('../../controllers/frontend/userFrontend');

const router = express.Router();

router.route('/dashboard').get(dashboard);
router.route('/request-data').get(requestData);

module.exports = router;
