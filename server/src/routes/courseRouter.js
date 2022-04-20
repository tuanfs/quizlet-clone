const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

const {
  createCourse,
  updateCourse,
  updateOneTerm,
  getOneCourse,
  deleteOneTerm,
  getAllCourseByIdUser
} = require('../controllers/courseControler')

router.post('/create', verifyToken, createCourse)
router.put('/update/:id', verifyToken, updateCourse)
router.put('/update-one/:id', verifyToken, updateOneTerm)
router.get('/course-item/:id', verifyToken, getOneCourse)
router.put('/course-item/:id', verifyToken, deleteOneTerm)
router.get('', verifyToken, getAllCourseByIdUser)

module.exports = router
