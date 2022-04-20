const Folder = require('../models/Folder')
const randomChoiceItem = require('../commons/randomChoiceItem')

exports.createFolder = async (req, res) => {
  const {name, description} = req.body
  try {
    const newFolder = new Folder({
      name,
      description,
      user: req.userId,
      totalCourse: 0
    })
    if (!newFolder) {
      return res
        .status(404)
        .json({success: false, message: 'Create folder failed'})
    }
    await newFolder.save()
    res.json({
      success: true,
      message: 'Create folder successfully',
      folder: newFolder
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.getAllFolder = async (req, res) => {
  try {
    const folderList = await Folder.find({user: req.userId}).populate('user', [
      'fullName'
    ])
    if (!folderList) {
      return res
        .status(404)
        .json({success: false, message: 'User unauthorised'})
    }
    res.json({
      success: true,
      message: 'get all folder successfully',
      folder: {folderList, author: req.fullName}
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.getOneFolder = async (req, res) => {
  const id = req.params.id
  try {
    const folderItem = await Folder.findById(id)
      .populate('user', ['fullName'])
      .populate('courses.course', ['card', 'name', 'total'])

    if (!folderItem) {
      return res
        .status(404)
        .json({success: false, message: 'Folder item not found'})
    }
    res.json({
      success: true,
      message: 'Get folder item successfully',
      folder: {folderItem, author: req.fullName}
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.updateFolder = async (req, res) => {
  const {name, description} = req.body
  console.log(req.body)
  const id = req.params.id
  try {
    let updatedFolder = {
      name,
      description
    }
    updatedFolder = await Folder.findByIdAndUpdate(id, updatedFolder, {
      new: true
    })
    if (!updatedFolder) {
      return res.status(404).json({success: false, message: 'Folder not found'})
    }
    res.json({
      success: true,
      message: 'Update folder successfully',
      updatedFolder
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.deleteFolder = async (req, res) => {
  const id = req.params.id
  try {
    const deleteFolder = await Folder.findByIdAndDelete(id)
    if (!deleteFolder) {
      return res.status(404).json({success: false, message: 'Folder not found'})
    }
    res.json({
      success: true,
      message: 'Delete folder successfully',
      deleteFolder
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.addCourses = async (req, res) => {
  const id = req.params.id
  const {idCourse} = req.body

  try {
    const folder = await Folder.findById(id)
    if (!folder) {
      return res.status(403).json({
        success: false,
        message: 'User unauthorised or folder not found'
      })
    }
    const isCourse = folder.courses.filter((item) => {
      return item.course.toString() === idCourse.toString()
    })

    if (isCourse.length > 0) {
      return res.json({success: false, message: 'Course exist in folder'})
    }

    let addCourses = {
      courses: [...folder.courses, {course: idCourse}],
      totalCourse: folder.courses.length + 1
    }

    addCourses = await Folder.findByIdAndUpdate(id, addCourses, {new: true})

    if (!addCourses) {
      return res.status(404).json({success: false, message: 'Folder not found'})
    }
    res.json({
      success: true,
      message: 'Add courses successfully',
      folder: addCourses
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.removeCourse = async (req, res) => {
  const id = req.params.id
  const {idCourse} = req.body

  try {
    const folder = await Folder.findById(id)

    if (!folder) {
      return res.status(403).json({
        success: false,
        message: 'User unauthorised or folder not found'
      })
    }

    const isCourse = folder.courses.filter((item) => {
      return item.course.toString() === idCourse.toString()
    })

    if (isCourse.length === 0) {
      return res.json({success: false, message: 'Course empty'})
    }

    const courseList = folder.courses.filter((item) => {
      return item.course.toString() !== idCourse.toString()
    })

    let removeCourses = {
      courses: courseList,
      totalCourse: courseList.length
    }

    removeCourses = await Folder.findByIdAndUpdate(id, removeCourses, {
      new: true
    })

    if (!removeCourses) {
      return res.json({success: false, message: 'Folder not found'})
    }

    res.json({
      success: true,
      message: 'Remove courses successfully',
      folder: removeCourses
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}

exports.getAllCourseByIdFolder = async (req, res) => {
  const id = req.params.id

  try {
    const allCourse = await Folder.findById(id).populate('courses.course', [
      'card'
    ])
    const listCourse = allCourse.courses.reduce((total, item) => {
      return [...total, ...item.course.card]
    }, [])

    if (listCourse.length === 0) {
      return res.json({success: false, message: 'Folder empty course '})
    }

    const listCourseNew = randomChoiceItem(listCourse)
    res.json({
      success: true,
      message: 'Get all course by id folder successfully',
      courses: listCourseNew
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({success: false, message: 'Server error'})
  }
}
