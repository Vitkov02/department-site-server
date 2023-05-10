const uuid = require('uuid');
const path = require('path');
const {StudentWork} = require('../models/models')

exports.getAll = async (req, res) => {
    try {
        const studentwork = await StudentWork.findAll();
        res.json(studentwork)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error'});
    }
}

exports.create = async (req, res) => {
    try {
      const { title, author, description} = req.body;
      const newPost = await StudentWork.create({
        title,
        description,
        author,
      });
      res.json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };