const express = require('express')
const { postInterviewer } = require('./Interviewer.controller')

const router = express.Router()

router.post('/interviewer', postInterviewer)

module.exports = router