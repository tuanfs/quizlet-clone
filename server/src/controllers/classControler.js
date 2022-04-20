const Class = require('../models/Class')

exports.createClass = async (req, res) => {
  const {
    name,
    description,
    isMemberAddMember = false,
    isMemberAddTerm = false
  } = req.body
  if (!name) {
    return res.status(400).json({success: false, message: 'Name is required'})
  }
  try {
    const newClass = new Class({
      name,
      description,
      isMemberAddMember,
      isMemberAddTerm,
      user: req.userId
    })
    await newClass.save()
    res.json({
      success: true,
      newClass: newClass,
      message: 'Create class successfully'
    })
  } catch (error) {
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.getAllClassByUser = async (req, res) => {
  try {
    const classList = await Class.find({user: req.userId})
    res.status(200).json({
      success: true,
      message: 'get all class by user successfully',
      classes: {classList, author: req.fullName}
    })
  } catch (error) {
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.getOneClass = async (req, res) => {
  const id = req.params.id
  try {
    const classItem = await Class.findById(id)
    if (!classItem) {
      return res.status(404).json({success: false, message: 'Class not found'})
    }
    res.json({
      success: true,
      message: 'Get class by id successfully',
      class: {
        classItem,
        author: req.fullName
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.updateClass = async (req, res) => {
  const id = req.params.id
  const {name, description, isMemberAddTerm, isMemberAddMember} = req.body
  try {
    const updateClass = {
      name,
      description,
      isMemberAddTerm,
      isMemberAddMember
    }
    const newClass = await Class.findByIdAndUpdate(id, updateClass, {
      new: true
    })
    if (!newClass) {
      return res.status(404).json({success: false, message: 'Class not found'})
    }
    res.json({status: true, message: 'Update class successfully', newClass})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.deleteClass = async (req, res) => {
  const id = req.params.id
  try {
    const deleteClass = await Class.findByIdAndDelete(id)
    if (!deleteClass) {
      return res.status(404).json({success: false, message: 'Class not found'})
    }
    res.json({success: true, message: 'Delete success'})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}
