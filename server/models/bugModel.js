const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/bugs')

const bugSchema = new mongoose.Schema({
  title: {type: String, required: true},
  priority: {type: String, required: true},
  assignedTo: {type: String},
  status: {type: String, required: true},
  openedBy: {type: String, required: true},
  description: {type: String, required: true}
})

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;