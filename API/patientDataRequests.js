const API = requrire('./api');
const { HOSPITALS, PDREQUESTS } = require('../constants/routes');

export async function getPatientDataRequests(hospitalId) {
  try {
    const res = await API.get(`${HOSPITALS}/${hospitalId}${PDREQUESTS}`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getPatientDataRequestById(id) {
  try {
    const res = await API.get(`${PDREQUESTS}/${id}`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function addPatientDataRequest(hospitalId, patientData) {
  try {
    const res = await API.post(
      `${HOSPITALS}/${hospitalId}/reviews`,
      patientData
    );
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getPatientDataRequestForUser() {
  try {
    const res = await API.get(`${PDREQUESTS}/user`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function approvePatientDataRequest(patientDataRequestId) {
  try {
    const res = await API.put(`${PDREQUESTS}/${patientDataRequestId}/approve`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}
