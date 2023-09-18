const Progress = require("../models/progressModel");

const progressController = async (req, res) => {
    try {
      const progress = new Progress(req.body);
      await progress.save();
      res.status(201).json(progress);
    } catch (error) {
      res.status(400).json({ error: 'Failed to add progress' });
    }
  }
const getProgressByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    // Find progress data for the user ID
    const progress = await Progress.find({ user: id });

    if (!progress) {
      return res.status(404).json({ error: 'Progress data not found' });
    }

    res.json(progress);

  } catch (error) {
    console.error('Error fetching progress data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

  module.exports = {progressController ,getProgressByUserId};