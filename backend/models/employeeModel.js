
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required:[true , "Name is required "],
  },
  isRecommendedForIncrement: {
    type: Boolean,
    required:[true , "Isincrement is required "],
  },
  isRecommendedForPromotion: {
    type: Boolean,
    required:[true , "isPromoted is required e"],
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
