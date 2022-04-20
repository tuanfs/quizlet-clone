const User = require('../models/User')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')

exports.registerUser = async (req, res) => {
  const {fullName, email, password, birthday, avatar} = req.body

  if (!email || !password || !fullName || !birthday) {
    return res
      .status(400)
      .json({success: false, message: 'Missing name or email or password'})
  }
  try {
    const user = await User.findOne({email})
    if (user) {
      return res
        .status(400)
        .json({success: false, message: 'User already exists'})
    }
    const hashedPassword = await argon2.hash(password)
    const newUser = new User({
      fullName,
      email,
      birthday,
      password: hashedPassword,
      avatar
    })
    await newUser.save()
    res.json({
      success: true,
      message: 'Register user successfully'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({success: false, message: 'Internal server error'})
  }
}

exports.loginUser = async (req, res) => {
  const {email, password} = req.body
  if (!email || !password) {
    return res
      .status(400)
      .json({success: false, message: 'Missing email or password'})
  }
  try {
    const user = await User.findOne({email})

    if (!user) {
      return res
        .status(400)
        .json({success: false, message: 'Incorrect email or password'})
    }
    const passwordValid = await argon2.verify(user.password, password)
    if (!passwordValid) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect email or passwordd'
      })
    }
    const accessToken = jwt.sign(
      {userId: user._id, userEmail: user.email, fullName: user.fullName},
      process.env.ACCESS_TOKEN_SECRET
    )
    res.json({
      success: true,
      message: 'Login user successfully',
      accessToken
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({success: false, message: 'Internal server error'})
  }
}
