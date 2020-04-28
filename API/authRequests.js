const API = require('./api');
const { AUTH } = require('../constants/routes');

exports.login = async (userData) => {
  try {
    const res = await API.post(`${AUTH}/login`, userData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

exports.getMe = async (options = {}) => {
  try {
    const res = await API.get(`${AUTH}/me`, options);
    //const { data } = res.data;
    return res.data;
  } catch (err) {
    throw err;
  }
};

exports.register = async (userData) => {
  try {
    const res = await API.post(`${AUTH}/register`, userData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

exports.logout = async () => {
  try {
    const res = await API.get(`${AUTH}/logout`);
    return res.data;
  } catch (err) {}
};

exports.updateDetails = async (userData) => {
  try {
    const res = await API.put(`${AUTH}/updatedetails`, userData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//export async function updatePassword(userData) {
exports.updatePassword = async (userData) => {
  try {
    const res = await API.put(`${AUTH}/updatepassword`, userData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

exports.forgotPassword = async (userData) => {
  try {
    const res = await API.post(`${AUTH}/forgotpassword`, userData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

exports.resetPassword = async (userData, resetToken) => {
  try {
    const res = await API.put(`${AUTH}/resetpassword/${resetToken}`, userData);
    return res.data;
  } catch (err) {
    throw err;
  }
};
