var mongoose = require("mongoose");

var customerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  contactNumber: {
    type: Number,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  vehicleNumber: {
    type: String,
    require: true
  },
  vehicleName: {
    type: String,
    require: true
  },
  vehicleProblem: {
    type: String,
    require: true
  },
  customerFeedback: {
    type: [String],
    default: Date.now
  }
});

module.exports = customer = mongoose.model("customerSchema", customerSchema);
