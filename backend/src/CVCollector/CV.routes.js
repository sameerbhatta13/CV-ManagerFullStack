const express = require('express')
const { postCV, getAllCV, updateCV } = require('./CV.controller')
const { upload } = require('../../middleware/file-upload')

const router = express.Router()

router.post('/cv', upload.single('image'), postCV)
router.get('/cv', getAllCV)
router.put('/cv', updateCV)


module.exports = router