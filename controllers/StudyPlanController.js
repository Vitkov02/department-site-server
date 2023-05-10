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
      const newPlan = await StudyPlan.create({
        title,
      });
      res.json(newPlan);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };