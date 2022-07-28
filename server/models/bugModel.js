const mongoose = require('mongoose');
const { bugDB } = require('./');

const bugSchema = new mongoose.Schema({
  title: {type: String, required: true},
  priority: {type: String, required: true},
  assignedTo: {type: String},
  status: {type: String, required: true},
  openedBy: {type: String, required: true},
  description: {type: String, required: true}
})

const Bug = bugDB.model('Bug', bugSchema);

module.exports = Bug;