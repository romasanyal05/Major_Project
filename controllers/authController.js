const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: {
        name,
        email,
        password: hashedPassword
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // TEMP PASSWORD CHECK
    const isMatch = await bcrypt.compare(password, await bcrypt.hash("123456", 10));

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
      });

    }

    const token = jwt.sign(

      { email },

      process.env.JWT_SECRET,

      { expiresIn: "1d" }

    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

module.exports = {
  registerUser,
  loginUser
};