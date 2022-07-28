const Bug = require('../models/bugModel');
const { options } = require('../router');

exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.send(bugs);
    res.status(200); 
  } catch (error) {
    res.status(500)
  }
}

exports.addBug = async (req, res) => {
  try {
    const newBug = await Bug.create(req.body);
    res.send(newBug);
    res.status(201);
  } catch (error) {
    res.status(500);
  }
}

exports.editBug = async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.body._id, req.body, {returnDocument:'after'});
    res.send(updatedBug);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

exports.deleteBug = async (req, res) => {
  try {
    const deletedBug = await Bug.findByIdAndDelete(req.body._id);
    res.send(deletedBug);
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}