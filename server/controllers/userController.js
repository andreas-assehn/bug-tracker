const User = require('../models/userModel');

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
    res.status(201);
  } catch (error) {
    res.status(500);
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({email: req.body.email});
    res.send(user);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}