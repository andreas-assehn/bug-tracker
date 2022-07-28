const mongoose = require('mongoose');
const { userDB } = require('./');

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  firstName: {type: String, required: true}, 
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
})

const User = userDB.model('User', userSchema);

module.exports = User;