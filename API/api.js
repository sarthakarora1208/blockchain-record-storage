const axios = require('axios');
const BASE_URL = '/api/v1';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
module.exports = API;
exports.setAuthToken = async (token) => {
  if (token) {
    // Apply to every request
    API.defaults.headers.common['Authorization'] = await `Bearer ${token}`;
    localStorage.setItem('token', token);
    //console.log(axios.defaults.headers.common['Authorization']);
  } else {
    // Delete auth header
    await delete API.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};
