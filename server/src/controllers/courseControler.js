const Course = require('../models/Course')
const randomChoiceItem = require('../commons/randomChoiceItem')

exports.createCourse = async (req, res) => {
  const {name, description, card} = req.body
  try {
    const cardNew = card.map((item) => {
      return {
        ...item,
        isLearn: false,
        isWrite: false
      }
    })
    const newCourse = new Course({
      name,
      description,
      user: req.userId,
      card: cardNew,
      total: cardNew.length
    })
    if (!newCourse) {
      return res.status(404).json({status: false, message: 'User unauthorised'})
    }
    await newCourse.save()

    res.json({
      success: true,
      message: 'Course created successfully',
      course: newCourse
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({status: false, message: 'Server error'})
  }
}

exports.updateCourse = async (req, res) => {
  const {name, description, card} = req.body
  const id = req.params.id

  try {
    const courseItem = await Course.findById(id)

    let updateCourse = {
      name,
      description,
      card,
      total: card.length
    }

    updateCourse = await Course.findByIdAndUpdate(id, updateCourse, {
      new: true
    })

    if (!updateCourse) {
      return res.status(404).json({success: false, message: 'Course not found'})
    }
    res.json({success: true, message: 'Course updated successfully'})
  } catch (error) {
    console.log(error)
    return res.status(500).json({status: false, message: 'Server error'})
  }
}

exports.updateOneTerm = async (req, res) => {
  const {_id} = req.body
  const id = req.params.id

  try {
    if (!_id) {
      return res
        .status(404)
        .json({status: false, message: 'Course item not found'})
    }
    const courseItem = await Course.findById(id)
    if (!courseItem) {
      return res
        .status(404)
        .json({status: false, message: 'Course item not found'})
    }
    const newCard = courseItem.card.map((item) => {
      if (item._id.toString() === _id.toString()) {
        item = {...req.body}
      }
      return item
    })

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      {...courseItem._doc, card: newCard},
      {
        new: true
      }
    )

    if (!updatedCourse) {
      return res
        .status(404)
        .json({success: false, message: 'Course item not found'})
    }

    res.json({
      status: true,
      message: 'Update term successfully',
      updatedCourse
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({status: false, message: 'Server error'})
  }
}

exports.getOneCourse = async (req, res) => {
  const id = req.params.id
  try {
    const courseItem = await Course.findById(id).populate('user', ['fullName'])
    if (!courseItem) {
      return res
        .status(404)
        .json({success: false, message: 'Course item not found'})
    }
    randomChoiceItem(courseItem.card)

    res.json({
      success: true,
      message: 'Get course itme successfully',
      courseItem: courseItem
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.deleteOneTerm = async (req, res) => {
  const id = req.params.id
  const {_id} = req.body

  try {
    const courseItem = await Course.findById(id)
    if (!courseItem) {
      return res
        .status(404)
        .json({success: false, message: 'Course item not found'})
    }
    const card = courseItem.card
    let newCard = []

    if (card && card.length > 0) {
      newCard = card.filter((item) => {
        console.log(item._id.toString() === _id.toString())
        return item._id.toString() !== _id.toString()
      })
    }
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      {
        ...courseItem._doc,
        card: newCard
      },
      {new: true}
    )
    res.json({
      success: true,
      message: 'Delete one term successfully',
      updatedCourse
    })
  } catch (error) {
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.getAllCourseByIdUser = async (req, res) => {
  const userId = req.userId
  try {
    const course = await Course.find({user: userId}).populate('user', [
      'fullName'
    ])
    if (!course) {
      return res.status(404).json({success: false, message: 'Course not found'})
    }

    res.json({success: true, message: 'Course successfully', course})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}
