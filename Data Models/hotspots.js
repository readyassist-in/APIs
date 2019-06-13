var mongoose = require("mongoose");
var technician = require("technician");
var customer = require("customer");
var hotspotSchema = mongoose.Schema({
  name: {
    type: String
  },
  Works: {
    type: [technician.ObjectId]
  },
  radius: {
    type: Number
  },
  no_of_customers: {
    type: [customer.ObjectId]
  }
});

module.exports = Hotspot = mongoose.model("hotspotSchema", hotspotSchema);
