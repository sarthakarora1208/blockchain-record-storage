const mongoose = require('mongoose');
const PatientDataRequestSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, 'Please add a comment'],
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  hospital: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hospital',
    required: true,
  },
});

PatientDataRequestSchema.index({ bootcamp: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('PatientDataRequest', PatientDataRequestSchema);
