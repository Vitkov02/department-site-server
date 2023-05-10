const uuid = require('uuid');
const path = require('path');
const {Teacher} = require('../models/models');

exports.getAll = async (req, res) => {
  try {
    const teacher = await Teacher.findAll();
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.create = async (req, res) => {
  
  try {
    const { name, subject, achivement } = req.body
    const { img } = req.files
    let fileName = uuid.v4() + ".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', fileName))
    const newTeacher = await Teacher.create({
      name,
      subject,
      achivement,
      img: fileName
    })
    res.json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};