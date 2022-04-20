const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

const {
  createFolder,
  getAllFolder,
  getOneFolder,
  deleteFolder,
  updateFolder,
  addCourses,
  removeCourse,
  getAllCourseByIdFolder
} = require('../controllers/folderControler')

router.post('/create', verifyToken, createFolder)
router.get('/', verifyToken, getAllFolder)
router.get('/:id', verifyToken, getOneFolder)
router.get('/course/:id', verifyToken, getAllCourseByIdFolder)
router.put('/add-course/:id', verifyToken, addCourses)
router.put('/remove-course/:id', verifyToken, removeCourse)
router.put('/update/:id', verifyToken, updateFolder)
router.delete('/delete/:id', verifyToken, deleteFolder)

module.exports = router
