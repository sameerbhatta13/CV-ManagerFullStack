const express = require('express')
const { postCV, getAllCV, updateCV, getCVByStatus } = require('./CV.controller')
const { upload } = require('../../middleware/file-upload')

const router = express.Router()

router.post('/cv', upload.single('image'), postCV)
router.get('/cv', getAllCV)
router.put('/cv/:id', upload.single('image'), updateCV)
router.get('/cv/query', getCVByStatus)


module.exports = router