var mongoose = require("mongoose");

var technicianSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  contactNumber: {
    type: Number,
    require: true
  },
  location: {
    type: [String],
    default: Date.now,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  pic: {
    type: String,
    default: "https://ping.com"
  },
  expertField: {
    type: String
  },
  hotspot: {
    name: {
      type: String,
      require: true
    },
    location: {
      type: String,
      requie: true
    }
  },
  employeeType: {
    type: String,
    require: true
  },
  account: {
    weekly: {
      type: Number,
      date: Date.now
    },
    monthly: {
      type: Number,
      date: Date.now
    }
  }
});

module.exports = Technician = mongoose.model(
  "technicianSchema",
  technicianSchema
);
