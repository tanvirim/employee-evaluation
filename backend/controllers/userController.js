const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    // Check if the user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User Not Found,valid Role required',
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect Password',
      });
    }
    //authenticate user
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    // Sign the token with the secret key and expiration time
    const token = jwt.sign(payload, 'secretKey');

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//Register callback

const registerController = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create a new user
    const newUser = new userModel({
      email,
      password: hashedPassword,
      name,
      role,
    });

    // Save the new user to the database
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllAdmin = async (req, res) => {
  try {
    const allAdmins = await userModel.find({ role: 'admin' });
    res.json(allAdmins);
  } catch (error) {
    console.error('Error fetching all admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllEMployee = async (req, res) => {
  try {
    const allEmployees = await userModel.find({ role: 'employee' });
    res.json(allEmployees);
  } catch (error) {
    console.error('Error fetching all employees:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the employee by ID
    const employeeToDelete = await userModel.findById(id);

    if (!employeeToDelete) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Check if the employee has the 'employee' role
    if (employeeToDelete.role !== 'employee') {
      return res.status(400).json({ error: 'This user is not an employee' });
    }

    // Delete the employee
    await userModel.findByIdAndDelete(id);

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllEvaluator = async (req, res) => {
  try {
    const allEvaluators = await userModel.find({ role: 'evaluator' });
    res.json(allEvaluators);
  } catch (error) {
    console.error('Error fetching all evaluators:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllAdmin,
  getAllEMployee,
  getAllEvaluator,
  deleteEmployeeById,
  loginController,
  registerController,
};
