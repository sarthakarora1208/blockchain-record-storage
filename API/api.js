const axios = require('axios');
const { BASE_URL } = require('../config/baseURL');

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = API;
