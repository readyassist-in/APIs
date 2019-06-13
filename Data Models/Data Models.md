# Data Models
# Technician Model

```
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

```

# HotSpot Model

```
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

```

# Employee Model

```
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

```

# Customer Model

```
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

```

# Tools Model

```
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

```
