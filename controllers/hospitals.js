const Hospital = require('../models/Hospital');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get single hospital
// @route   GET /api/v1/hospitals/:id
//@access   Public

exports.getHospital = asyncHandler(async (req, res, next) => {
  // find hospital from the id passed
  const hospital = await Hospital.findById(req.params.id);
  if (!hospital) {
    return next(
      new ErrorResponse(`Hospital not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: hospital });
});

// @desc    Get all hosptials
// @route   GET /api/v1/hospitals
// @access  Public

exports.getHospitals = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc     Get unapproved Hospitals
//@route    GET /api/v1/hospitals/unapproved
//@access   Public
exports.getUnapprovedHospitals = asyncHandler(async (req, res, next) => {
  let hospital = await Hospital.find({ isApproved: false });
  res.status(200).json({ success: true, data: hospital });
});

//@desc     Get approved Hospitals
//@route    GET /api/v1/hospitals/approved
//@access . Public
exports.getApprovedHospitals = asyncHandler(async (req, res, next) => {
  let hospital = await Hospital.find({ isApproved: true });
  res.status(200).json({ success: true, data: hospital });
});

//@desc     Get Hospital for owner
//@route    GET /api/v1/hospitals/user
//@access . Private
exports.getHospitalForUser = asyncHandler(async (req, res, next) => {
  const hospital = await Hospital.find({ user: req.user.id });
  res.status(200).json({ success: true, data: hospital });
});

//@desc     Create Hospital
//@route    POST /api/v1/hospitals
//@access   Private

exports.createHospital = asyncHandler(async (req, res, next) => {
  // Add the logged in user to the body
  req.body.user = req.user.id;

  // Check if the owner has a hospital already
  const existingHospital = await Hospital.findOne({ user: req.user.id });
  // if found a hospital return the error
  if (existingHospital) {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has a hospital already`,
        400
      )
    );
  }
  const hospital = await Hospital.create(req.body);
  res.status(201).json({
    success: true,
    data: hospital,
  });
});

//@desc     Update Hospital
//@route    PUT /api/v1/hospitals/:id
//@access . Private
exports.updateHospital = asyncHandler(async (req, res, next) => {
  let hospital = await Hospital.findById(req.params.id);
  if (!hospital) {
    return next(new ErrorResponse(`Hospital not found`));
  }
  if (hospital.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update hospital`,
        401
      )
    );
  }
  hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: hospital });
});

//@desc     Approve Hospital
//@route    PUT /api/v1/hospitals/:id/approve
//@access   Private(admin)

exports.approveHospital = asyncHandler(async (req, res, next) => {
  let hospital = await Hospital.findById(req.params.id);
  if (!hospital) {
    return next(new ErrorResponse(`Hospital not found`));
  }

  hospital = await Hospital.findByIdAndUpdate(
    req.params.id,
    {
      isApproved: true,
    },
    { new: true }
  );

  res.status(200).json({ success: true, data: hospital });
});
