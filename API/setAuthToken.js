const API = require('../API/api');
const setAuthToken = async (token) => {
  if (typeof localStorage === "undefined" || localStorage === null) {
      var LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./scratch');
    }
  if (token) {
    // Apply to every request
    API.defaults.headers.common['Authorization'] = await `Bearer ${token}`;

    localStorage.setItem('token',token);
    // window.localStorage.setItem('token', token);
    //console.log(axios.defaults.headers.common['Authorization']);
  } else {
    // Delete auth header
    await delete API.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

module.exports = setAuthToken;
