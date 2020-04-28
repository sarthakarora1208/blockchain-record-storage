const express = require('express');
const { dashboard } = require('../../controllers/frontend/adminFrontend');

const router = express.Router();

router.route('/dashboard').get(dashboard);

module.exports = router;
