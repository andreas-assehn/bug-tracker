const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/users')

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  firstName: {type: String, required: true}, 
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
})

const User = mongoose.model('User', userSchema);

module.exports = User;