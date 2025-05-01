const mongoose = require('mongoose')

const interviewerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Interviewer', interviewerSchema)