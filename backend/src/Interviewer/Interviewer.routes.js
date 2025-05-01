const express = require('express')
const { postInterviewer, getInterviewer } = require('./Interviewer.controller')

const router = express.Router()

router.post('/interviewer', postInterviewer)
router.get('/interviewer', getInterviewer)

module.exports = router