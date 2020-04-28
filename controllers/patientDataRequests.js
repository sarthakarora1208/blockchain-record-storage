const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const PatientDataRequest = require('../models/PatientDataRequest');
const Hospital = require('../models/Hospital');

//@description    Get Patient Data Request
//@route          GET /api/v1/hospitals/:hospitalId/pdrequests
//@access`        PUBLIC?

exports.getPatientDataRequests = asyncHandler(async (req, res, next) => {
  let pdRequests = await PatientDataRequest.find({
    hospital: req.params.hospitalId,
  }).populate({ path: 'user', select: 'name publicKey email' });
  res.status(200).json({
    success: true,
    count: pdRequests.length,
    data: pdRequests,
  });
});

//@description     Get a single Patient Data Request
//@route           GET /api/v1/pdrequests/:id
//@access          Public
exports.getPatientDataRequest = asyncHandler(async (req, res, next) => {
  const pdRequest = await PatientDataRequest.findById(req.params.id).populate({
    path: 'hospital',
    select: 'name description',
  });
  if (!pdRequest) {
    return next(
      new ErrorResponse(`No Patient Data found for ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: pdRequest,
  });
});

//@desc         Add patient data
//@route        POST /api/v1/hospitals/:hospitalId/pdrequests
//@access       Private

exports.addPatientDataRequest = asyncHandler(async (req, res, next) => {
  req.body.hospital = req.params.hospitalId;
  req.body.user = req.user.id;
  const hospital = await Hospital.findById(req.params.hospitalId);
  if (!hospital) {
    return next(
      new ErrorResponse(`No hospital with id of ${req.params.hospitalId}`, 404)
    );
  }
  const pdRequest = await PatientDataRequest.create(req.body);
  res.status(201).json({ success: true, data: pdRequest });
});

//@desc     Get Patient Data Request for the patient
//@route    GET /api/v1/pdrequests/user
//access    Private
exports.getPatientDataRequestForUser = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  let pdrequest = await PatientDataRequest.find({ user: req.user.id }).populate(
    {
      path: 'hospital',
      select: 'name',
    }
  );

  res.status(200).json({
    success: true,
    data: pdrequest,
  });
});

//@desc    Approve patient data request
//@route   PUT /api/v1/pdrequests/:id/approve
//@access  Private
exports.approvePatientDataRequest = asyncHandler(async (req, res, next) => {
  let pdrequest = await PatientDataRequest.findById(req.params.id);

  if (!pdrequest) {
    return next(new ErrorResponse(`Patient data request not found`));
  }

  pdrequest = await PatientDataRequest.findByIdAndUpdate(
    req.params.id,
    {
      isApproved: true,
    },
    { new: true }
  );

  res.status(200).json({ success: true, data: pdrequest });
});
