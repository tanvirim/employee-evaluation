const employeeModel = require("../models/employeeModel");
const Progress = require("../models/progressModel");
const UserModel =require("../models/userModel")
Employee = require("../models/employeeModel");
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

const getAllProgress = async (req, res) => {
  try {
    const allProgress = await Progress.find();

    res.json(allProgress);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'An error occurred while fetching progress entries.' });
  }
};

const addEmployeeRecommendation = async (req, res) => {
  try {
    const { employeeName, isRecommendedForIncrement, isRecommendedForPromotion } = req.body;

    const newEmployee = new employeeModel({
      employeeName,
      isRecommendedForIncrement,
      isRecommendedForPromotion,
    });

    await newEmployee.save();

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the employee recommendation.' });
  }
};


const getEmployeeNames = async (req, res) => {
  try {
    const employeeNames = await UserModel.find({ role: 'employee' });

    res.json(employeeNames.map((user) => user.name));
  
  } catch (error) {
    console.error('Error fetching employee names:', error);
    res.status(500).json({ error: 'An error occurred while fetching employee names.' });
  }
};


const findEmployeesWithRecommendation = async (req, res) => {
  try {
    const employeesWithRecommendation = await Employee.find({
      $or: [
        { isRecommendedForIncrement: true },
        { isRecommendedForPromotion: true },
      ],
    });

    res.json(employeesWithRecommendation);
  } catch (error) {
    console.error('Error finding employees with recommendation:', error);
    res.status(500).json({ error: 'An error occurred while finding employees with recommendation.' });
  }
};


  module.exports = {progressController ,getProgressByUserId , addEmployeeRecommendation , getEmployeeNames ,findEmployeesWithRecommendation ,getAllProgress};