const mongoose = require('mongoose');

exports.bugDB = mongoose.createConnection('mongodb://localhost:27017/bugs')
exports.userDB = mongoose.createConnection('mongodb://localhost:27017/users')

