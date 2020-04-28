const API = requrire('./api');
const { HOSPITALS } = require('../constants/routes');

export async function getHospitals() {
  try {
    const res = await API.get(`${HOSPITALS}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getApprovedHospitals() {
  try {
    const res = await API.get(`${HOSPITALS}/approved`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getUnapprovedHospitals() {
  try {
    const res = await API.get(`${HOSPITALS}/unapproved`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getHospitalById(id) {
  try {
    const res = await API.get(`${HOSPITALS}/${id}`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function addHospital(hospitalData) {
  try {
    const res = await API.post(`${HOSPITALS}`, hospitalData);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function updateHospital(hospitalId, hospitalData) {
  try {
    const res = await API.put(`${HOSPITALS}/${hospitalId}`, hospitalData);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getHospitalsFor() {
  try {
    const res = await API.get(`${HOSPITALS}/user`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}

export async function approveHospital(hospitalId) {
  try {
    const res = await API.put(`${HOSPITALS}/${hospitalId}/approve`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
}
