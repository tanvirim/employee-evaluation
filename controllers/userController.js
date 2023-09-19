const userModel = require("../models/userModel");
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
        message: "User Not Found,valid Role required",
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password); 
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }
 //authenticate user
 const payload = {id:user._id ,name:user.name,email:user.email,role:user.role}
 // Sign the token with the secret key and expiration time
 const token = jwt.sign(payload, "secretKey"); 
 
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
    const { email, password, name,role } = req.body;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
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
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


module.exports = {loginController,registerController}
