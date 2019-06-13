var mongoose = require("mongoose");
var employeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  department: {
    type: String,
    require: true
  },
  account: {
    type: Number,
    require: true
  },
  date_of_joining: {
    type: Date,
    require: true
  }
});

module.exports = Employee = require("employeeSchema", employeeSchema);
