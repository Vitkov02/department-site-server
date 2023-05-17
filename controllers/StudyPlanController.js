const {StudyPlan} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

exports.getAll = async (req, res) => {
    try {
        const studyplan = await StudyPlan.findAll();
        res.json(studyplan)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error'});
    }
}

exports.create = async (req, res) => {
    try {
      const { title } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg" + ".png"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const newPlan = await StudyPlan.create({
        title,
        img: fileName
      });
      res.json(newPlan);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };