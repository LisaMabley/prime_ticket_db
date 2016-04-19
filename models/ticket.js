
// Import Mongoose
var mongoose = require('mongoose');
// Init schema
var Schema = mongoose.Schema;
// Create ticket schema
var ticketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    required: true,
    max: 5,
    min: 1
  },
  description: {
    type: String,
    required: true
  },
  assignee: String,

  reporter: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now
  },
  createdDisplay: String,

  updatedDisplay: String,

  editable: {
    type: Boolean,
    default: false
  }
});

// Connect ticket schema to MongoDB
var Ticket = mongoose.model('Ticket', ticketSchema);

// Export for use in other files
module.exports = Ticket;
