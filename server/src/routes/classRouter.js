const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const {
  createClass,
  getAllClassByUser,
  updateClass,
  deleteClass,
  getOneClass,
} = require('../controllers/classControler');

router.post('/create', verifyToken, createClass);
router.put('/update/:id', verifyToken, updateClass);
router.delete('/delete/:id', verifyToken, deleteClass);
router.get('/', verifyToken, getAllClassByUser);
router.get('/:id', verifyToken, getOneClass);

module.exports = router;
