const employeeModel = require("../models/employeeModel");
const Progress = require("../models/progressModel");
const UserModel =require("../models/userModel")
Employee = require("../models/employeeModel");
const addProgress = async (req, res) => {
    try {
      const progress = new Progress(req.body);
      await progress.save();
      res.status(201).json(progress);
    } catch (error) {
      res.status(400).json({ error: 'Failed to add progress' });
    }
  }


  // Progress

  const getProgressByUserId = async (req, res) => {
    try {
      const { id } = req.params;
      const { sort } = req.query;
  
      let sortOrder = 1; // Default: ascending order
      if (sort === 'desc') {
        sortOrder = -1; // Descending order
      }
  
      // Find progress data for the user ID and apply sorting
      const progress = await Progress.find({ user: id }).sort({ progressPercentage: sortOrder });
  
      if (!progress) {
        return res.status(404).json({ error: 'Progress data not found' });
      }
  
      res.json(progress);
  
    } catch (error) {
      console.error('Error fetching progress data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

// delete progress by id 
const deleteProgressById = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndRemove(req.params.id);
    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }
    res.status(200).json({ message: 'Progress deleted successfully' });
  } catch (error) {
    console.error('Error deleting progress:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//get all progress
const getAllProgress = async (req, res) => {
  try {
    const allProgress = await Progress.find();

    res.json(allProgress);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'An error occurred while fetching progress entries.' });
  }
};

//delete all progress

const deleteAllProgress = async (req, res) => {
  try {
   
    await Progress.deleteMany({});
    res.status(204).json({
      success:true,
      message:"deleted all progress"
    }) 
  } catch (error) {
    console.error('Error deleting progress entries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//add employee recommendation
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
//
const getAllEmployee = async (req, res) => {
  try {
    const employee = await UserModel.find({ role: 'employee' });

    res.json(employee);
  
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


  module.exports = {deleteProgressById, deleteAllProgress,addProgress ,getProgressByUserId , addEmployeeRecommendation , getAllEmployee ,findEmployeesWithRecommendation ,getAllProgress};