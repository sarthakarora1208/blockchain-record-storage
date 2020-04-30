const API = require('./api');
const { HOSPITALS, PDREQUESTS } = require('../constants/routes');

exports.getPatientDataRequests = async (hospitalId) => {
  try {
    const res = await API.get(`${HOSPITALS}/${hospitalId}${PDREQUESTS}`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

exports.getPatientDataRequestById = async (id) => {
  try {
    const res = await API.get(`${PDREQUESTS}/${id}`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

exports.addPatientDataRequest = async (hospitalId, patientData) => {
  try {
    const res = await API.post(
      `${HOSPITALS}/${hospitalId}/pdrequests`,
      patientData
    );
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

exports.getPatientDataRequestForUser = async () => {
  try {
    const res = await API.get(`${PDREQUESTS}/user`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

exports.approvePatientDataRequest = async (patientDataRequestId) => {
  try {
    const res = await API.put(`${PDREQUESTS}/${patientDataRequestId}/approve`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};
