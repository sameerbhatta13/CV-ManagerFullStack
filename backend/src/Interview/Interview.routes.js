const express = require('express')
const { postInterview, getallInterview } = require('./Interview.controller')

const router = express.Router()

router.post('/interview', postInterview)
router.get('/interview', getallInterview)


module.exports = router