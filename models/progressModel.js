const mongoose = require('mongoose');

// Define the Progress schema with validation
const progressSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, 'Project Name is required'],

  },
  projectContribution: {
    type: String,
    required: [true, 'Project Contribution is required'],

  },
  progressPercentage: {
    type: Number,
    required: [true, 'Progress Percentage is required'],
 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: [true, 'User is required'],
  },
}, { timestamps: true });

// Define the Progress model
const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress
