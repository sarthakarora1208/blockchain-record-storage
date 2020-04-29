const API = require('./api');
const { HOSPITALS } = require('../constants/routes');

//export async function getHospitals() {
exports.getHospitals = async () => {
  try {
    const res = await API.get(`${HOSPITALS}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//export async function getApprovedHospitals() {
exports.getApprovedHospitals = async () => {
  try {
    const res = await API.get(`${HOSPITALS}/approved`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

exports.getUnapprovedHospitals = async () => {
  try {
    const res = await API.get(`${HOSPITALS}/unapproved`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

//export async function getHospitalById(id) {
exports.getHospitalById = async (id) => {
  try {
    const res = await API.get(`${HOSPITALS}/${id}`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

//export async function addHospital(hospitalData) {
exports.addHospital = async (hospitalData) => {
  try {
    const res = await API.post(`${HOSPITALS}`, hospitalData);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

//export async function updateHospital(hospitalId, hospitalData) {
exports.updateHospital = async (hospitalId, hospitalData) => {
  try {
    const res = await API.put(`${HOSPITALS}/${hospitalId}`, hospitalData);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

//export async function getHospitalsFor() {
exports.getHospitalForUser = async () => {
  try {
    const res = await API.get(`${HOSPITALS}/user`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

//export async function approveHospital(hospitalId) {
exports.approveHospital = async (hospitalId) => {
  try {
    const res = await API.put(`${HOSPITALS}/${hospitalId}/approve`);
    const { data } = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};
