var mongoose = require("mongoose");
var customer = require("customer");
var technician = require("technician");
var employee = require("employee");

var toolsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
  date_of_purchasing: {
    type: Date,
    require: true
  },
  customer: {
    type: customer.ObjectId
  },
  purchaseFrom: {
    name: {
      type: String,
      require: true
    },
    location: {
      type: String,
      require: true
    },
    Gst_no: {
      type: String
    },
    purchasedBy: {
      type: [technician.ObjectId || employee.ObjectId],
      require: true
    }
  },
  mode_of_payment: {
    type: String
  }
});
module.exports = Tools = mongooose.model("toolsSchema", toolsSchema);
